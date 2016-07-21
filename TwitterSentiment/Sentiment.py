#Used to generate Twitter sentiment for a contestant on American Idol, post performance.

# The system gathers as many tweets as Twitter will serve, filters RTs, and then performs
# a basic sentiment analysis using TextBlob

import twitter
import re
from textblob import TextBlob
import time, datetime
import csv


# Remove retweets (either old style or new style)
#Note that username does not include the @
#Statuses is a list of strings, not a list of dicts
def FilterTwitterResults(statuses, username):
    filtered=[]
    for s in statuses:
        if s.startswith('RT') or s.startswith('"'):
            continue #both style of quoted retweets
        uns = ExtractHandlesFromBeginningOfTweet(s)
        if username in uns:
            continue #message was a reply to the contestant
        else:
            filtered.append(s)
    return filtered

def ExtractHandlesFromBeginningOfTweet(s):
    ture = re.compile(r'@([^\s]+)')
    uns = []
    s1 = s
    mo = re.match(ture,s1)
    while mo:
        un = mo.group(1)
        uns.append(un)
        s1 = s1[len(un)+2:]
        mo = re.match(ture,s1)
    return uns

def GetSentiment(tweets):
    positive = 0
    negative = 0
    neutral = 0
    tot = 0
    for tweet in tweets:         
        tb = TextBlob(tweet)
        sent = tb.sentiment
        tot += sent.polarity
        if(sent.polarity == 0):
            neutral += 1
        if(sent.polarity < 0):
            negative += 1
        if(sent.polarity > 0):
            positive += 1
    return [positive, negative, neutral, PercentApproval(tot/len(tweets))]
    
def WriteSentiment(tweets, filename):
    with open(filename,'a') as of:
        for tweet in tweets:     
            tb = TextBlob(tweet)
            sent = tb.sentiment
            try:
                of.write(str(sent)+"\t"+tweet+"\n")
            except:
                print("can't write tweet")

def PercentApproval(polarity):
    return 50*(polarity+1)

def GetTweets(its, phrases, twitter_api):
    #Get Tweets for each phrase
    #Total number of tweets aimed for is its x 100 x number of phrases
    count = 100    
    statuses = []
    for q in phrases:
        if q != "fakename": #fakename used when the person had no twitter handle
            search_results = twitter_api.search.tweets(q=q, count=count)
            statuses += search_results['statuses']
            for _ in range(its):
                 try:
                      next_results = search_results['search_metadata']['next_results']
                 except KeyError:
                      break
                 kwargs = dict([ kv.split('=') for kv in next_results[1:].split("&") ])
                 search_results = twitter_api.search.tweets(**kwargs)
                 statuses += search_results['statuses']
    print(len(statuses),'tweets found')
    tweets=[]
    for i in range(len(statuses)):
        foo = statuses[i]
        s = re.sub('[^\w^\s#@:,.?\'/]+', ' ', foo['text'])
        s = re.sub('[\n\t]', ' ', s)
        s = s.lstrip()
        tweets.append(s)
    return tweets

def OpenCSVFileAsList(filename):
    foo = open(filename, 'r')
    bar = csv.reader(foo, delimiter='\t', quotechar='"')
    of = list(bar)
    foo.close()
    return of

def WriteStatusesToFile(filename, statuses, sent):
    with open(filename,'a') as of:
        ts = time.time()
        st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        of.write(st+"\n")
        of.write('Positive: '+str(sent[0])+"\n")
        of.write('Negative: '+str(sent[1])+"\n")
        of.write('Neutral: '+str(sent[2])+"\n")
        of.write('Overall: '+str(sent[3])+"\n")
        for status in statuses:            
            try:
                of.write(status+"\n")
            except:
                print("can't write")

def GenerateTwitterAPI():
    CONSUMER_KEY = ''
    CONSUMER_SECRET =''
    OAUTH_TOKEN = ''
    OAUTH_TOKEN_SECRET = ''
    auth = twitter.oauth.OAuth(OAUTH_TOKEN, OAUTH_TOKEN_SECRET,
                               CONSUMER_KEY, CONSUMER_SECRET)
    twitter_api = twitter.Twitter(auth=auth)
    return twitter_api    

def PrintResults(results, names):
    print('Name', 'Pos', 'Neg', 'Neu',sep='\t')
    for i in range(0,len(names)):        
        print(names[i], end='\t\t')
        for r in results[i]:
            print(str(r), end='\t')
        print()
        
def DoAllTwitter(n):
    twitter_api = GenerateTwitterAPI()
    results = []
    names = []
    for p in n:
        filename = p[0]
        names.append(filename)
        p[0] += ' #idol'
        if len(p) > 1:
            handle = p[1]
            handle = handle[1:] #remove @
        else:
            handle = 'fakename'
        tweets = GetTweets(6, p, twitter_api)
        filtered = FilterTwitterResults(tweets, handle)
        sent = GetSentiment(filtered)
        results.append(sent)
        WriteStatusesToFile('foo\\'+filename+".txt", tweets, sent)        
        WriteSentiment(filtered, 'foo\\'+filename+".txt")        
    PrintResults(results, names)
    
def ReadDemFile():
    return OpenCSVFileAsList('Names.txt')