//JQPlot Example of a scatter plot

$(document).ready(function(){
      
  var series1 = [[-7.777778e+001,-5.059381e+001],[-8.888889e+001,6.260558e+001],[1.388889e+001,-1.327561e+001],[3.888889e+001,6.107500e+000],[-3.055556e+001,-3.171878e+001],[-6.666667e+001,-3.987340e+001],[-5.555556e+000,-5.061922e+001],[-100,-4.167708e+001],[8.888889e+001,-1.698457e+001],[7.222222e+001,100],[5.555556e+001,2.719267e+001],[100,4.883672e+001],[100,7.533489e+001],[-1.051351e+002,-6.384683e+001],[6.135135e+001,-1.868084e+001],[5.243243e+001,7.773733e+001],[7.027027e+001,-1.142011e+001],[-2.783784e+001,100],[-7.243243e+001,-7.537857e+001],[-4.270270e+001,-6.091050e+001],[3.162162e+001,-1.178218e+002],[-4.054054e+000,9.215201e+001],[-6.351351e+001,2.834401e+000],[-9.393939e+001,-1.502239e+001],[-6.666667e+001,6.011528e+001],[-100,-3.473316e+001],[100,100],[1.818182e+001,-3.087335e+001],[-9.090909e+000,2.717822e+001],[1.212121e+001,-3.576244e+001],[9.090909e+000,-3.298338e+001],[4.848485e+001,-2.552107e+001],[8.181818e+001,-1.239771e+001],[-1.230088e+002,100],[-9.911504e+001,-7.860958e+001],[1.238938e+001,-7.121374e+001],[-1.946903e+001,-3.526995e+001],[-7.522124e+000,-1.396992e-001],[7.212389e+001,3.203221e+001],[9.203540e+001,2.300929e+001],[1.000000e+002,3.536034e+001],[-2.743363e+001,-5.168872e+000],[3.355705e+000,-8.721519e+001],[-2.114094e+002,-9.075949e+001],[-6.644295e+001,5.607595e+001],[8.724832e+000,-1.367089e+001],[4.093960e+001,-1.177215e+001],[100,1.164557e+001],[6.778523e+001,100],[5.704698e+001,3.569620e+001],[3.488372e+001,-2.897903e+001],[7.558140e+001,-5.376418e+001],[3.895349e+001,100],[5.116279e+001,8.844964e+001],[-2.296512e+002,1.385356e+001],[-7.093023e+001,-1.471296e+002],[100,2.756961e+001],[1.659193e+001,-7.568590e-001],[100,3.500473e+001],[-1.286996e+002,-8.703879e+001],[-1.031390e+001,-1.455061e+002],[-3.991031e+001,100],[6.233184e+001,9.829707e+001],[5.348837e+001,5.414552e+000],[-1.209302e+002,-6.666667e+001],[3.023256e+001,7.614213e+000],[-6.279070e+001,-4.636210e+001],[100,100],[6.603774e+001,100],[-4.339623e+001,-9.587405e+001],[100,7.524430e+001],[-1.226415e+002,-7.937025e+001],[-6.666667e+001,-6.131621e+001],[-3.333333e+001,-3.868379e+001],[1.000000e+002,100],[-100,-100],[100,100],[-8.292683e+001,-6.402439e+000],[100,100],[-2.682927e+001,-3.597561e+001],[-4.878049e+000,-2.332317e+001],[-9.756098e+001,3.734756e+001],[-4.146341e+001,-3.262195e+001],[1.219512e+001,-2.271341e+001],[9.512195e+001,8.475610e+001],[9.756098e+000,-3.399390e+001],[1.707317e+001,-3.628049e+001],[-5.609756e+001,-2.865854e+001],[7.560976e+001,-2.134146e+000],[-9.160305e+000,-4.358196e+001],[-3.562341e+000,-2.151995e+001],[-5.674300e+001,-3.761925e+001],[5.521628e+001,1.616435e+001],[3.002545e+001,1.604510e+001],[-4.834606e+001,3.810711e+001],[100,1.853859e+000],[-8.753181e+001,1.377927e+001],[-6.793893e+001,-4.310494e+001],[4.834606e+000,-4.012359e+001],[8.320611e+001,100],[2.668622e+001,2.866962e+001],[-9.354839e+001,-5.564381e+001],[100,-2.947915e+000],[-1.052786e+002,2.011608e+001],[-8.475073e+001,-5.564381e+001],[8.533724e+001,-1.226516e+001],[8.240469e+001,100],[2.375367e+001,-1.715289e+001],[9.090909e+000,-5.472736e+001],[-4.369501e+001,4.959523e+001],[1.988131e+001,1.692813e+001],[-5.489614e+001,5.895659e+001],[100,100],[3.857567e+000,3.170376e+001],[5.459941e+001,-6.121853e+001],[-9.495549e+000,-6.286027e+001],[-7.893175e+001,4.582269e+001],[-4.688427e+001,-6.614374e+001],[1.186944e+001,-6.318862e+001],[4.809160e+001,3.548387e+001],[-1.297710e+001,-8.140417e+001],[-5.877863e+001,-1.499051e+001],[-8.320611e+001,1.157495e+001],[-4.656489e+001,2.106262e+001],[3.587786e+001,-6.963947e+001],[100,100],[1.755725e+001,-2.087287e+000],[7.519685e+001,100],[9.448819e+001,2.953177e+001],[-1.177165e+002,-5.451505e+001],[-5.157480e+001,-3.484950e+001],[-9.015748e+001,2.648829e+001],[100,-1.892977e+001],[-1.023622e+001,-4.772575e+001],[6.301370e+001,-1.152701e+001],[-2.082192e+002,100],[5.890411e+001,-4.878775e+001],[8.767123e+001,4.155678e+001],[-1.013699e+002,-6.180349e+001],[100,-1.943854e+001],[8.896552e+001,-9.386047e+001],[-1.124138e+002,100],[-7.655172e+001,-1.016744e+002],[100,9.553488e+001],[-7.179487e+001,-3.011236e+001],[-2.820513e+001,-6.988764e+001],[1.000000e+002,100],[100,-100],[-100,100],[-4.010152e+001,-5.052525e+001],[9.086294e+001,4.941250e+000],[-5.532995e+001,-1.896350e+001],[1.776650e+001,-6.450860e+000],[9.086294e+001,-5.680492e-001],[9.086294e+001,-3.369388e+000],[100,1.213135e+001],[-7.664975e+001,-2.148471e+001],[-5.076142e-001,-2.062096e+000],[2.385787e+001,-8.878686e+000],[-1.406091e+002,-4.770057e+000],[-1.010152e+002,100],[-7.433962e+001,-2.799756e+001],[-1.241509e+002,-3.095238e+001],[8.754717e+001,100],[-3.698113e+001,-8.656899e+000],[-1.622642e+001,-5.433455e+000],[6.679245e+001,2.075702e-001],[100,-7.851038e+000],[-1.622642e+001,-7.582418e+000],[6.264151e+001,1.471306e+001],[3.773585e-001,-1.416361e+001],[-4.943396e+001,-1.228327e+001],[-8.157895e+001,-2.155608e+001],[-4.473684e+001,-3.012073e+001],[3.947368e+001,-2.145289e+001],[-4.210526e+001,-3.538335e+001],[2.368421e+001,-2.145289e+001],[6.578947e+001,-6.077804e+000],[-2.631579e+000,9.813229e+000],[-2.631579e+001,3.395934e+001],[-3.157895e+001,-7.728821e+000],[100,100],[-2.976744e+001,-7.138655e+000],[6.232558e+001,1.774858e+001],[-1.386047e+002,-9.909786e+001],[-2.139535e+001,-1.402236e+001],[4.558140e+001,-9.609727e+000],[6.232558e+001,100],[-5.906977e+001,-1.155128e+001],[-2.139535e+001,3.098647e+000],[100,2.057266e+001],[1.639344e+000,-2.199601e+001],[-4.426230e+001,-5.968064e+001],[100,4.922156e+001],[5.737705e+001,3.708583e+001],[-7.704918e+001,-2.263473e+001],[-8.360656e+001,-6.798403e+001],[7.049180e+001,100],[-2.459016e+001,-1.401198e+001],[1.954023e+001,8.357056e+001],[-4.482759e+001,-4.161114e+001],[-3.275862e+001,-5.910055e+001],[-8.505747e+001,-5.867656e+001],[7.471264e+000,-2.327377e+001],[100,100],[3.563218e+001,-9.085403e-001],[7.563452e+001,-1.043956e+001],[-1.162437e+002,-1.835165e+001],[-1.192893e+002,-4.373626e+001],[8.629442e+000,3.010989e+001],[5.126904e+001,-5.758242e+001],[100,100],[-1.091837e+002,-6.439643e+001],[100,7.792391e+001],[-1.989796e+001,-8.060122e+001],[-5.051020e+001,-3.292626e+001],[7.959184e+001,1.000000e+002],[5.806452e+001,100],[5.161290e+001,1.057884e+001],[-2.096774e+002,-1.447106e+002],[100,3.413174e+001],[-8.461538e+001,-1.575492e+001],[-1.538462e+001,-8.424508e+001],[100,100],[-100,100],[100,-1.000000e+002],[7.134986e+001,2.809490e+001],[-5.399449e+001,-1.361190e+001],[6.418733e+001,100],[-3.250689e+001,-2.152975e+001],[-5.757576e+001,-2.410765e+001],[6.887052e+000,-2.291076e+001],[100,-3.211756e+001],[-1.041322e+002,5.665722e-001],[-1.077135e+002,-4.178470e+001],[-9.338843e+001,-2.245042e+001],[9.641873e+001,6.989377e+001],[2.837466e+001,-2.152975e+001],[8.209366e+001,1.487252e+000],[-1.006289e+002,-1.975384e+001],[4.811321e+001,-3.739274e+001],[7.232704e+001,-6.882205e+000],[-6.257862e+001,2.744214e+001],[-1.415094e+001,-1.555864e+001],[-7.295597e+001,-2.032591e+001],[-3.836478e+001,-4.912022e+001],[1.006289e+001,100],[100,5.137384e+001],[-4.182390e+001,-2.728612e+001],[100,-2.496316e+000],[6.363636e+001,-3.350740e+000],[4.848485e+001,-2.053960e+001],[-8.787879e+001,-6.209748e+001],[-1.121212e+002,-6.873368e+001],[2.121212e+001,-1.270670e+001],[-9.393939e+001,-8.037424e+001],[-3.030303e+001,2.765448e+001],[100,100],[6.060606e+000,5.409051e+001],[8.484848e+001,6.605744e+001],[-4.869565e+001,-3.953099e+001],[-9.304348e+001,-9.949749e+001],[2.173913e+001,100],[2.173913e+001,-7.068677e+001],[-9.565217e+000,1.172529e+000],[-2.260870e+001,-1.926298e+001],[-2.782609e+001,9.547739e+000],[5.826087e+001,4.003350e+001],[100,7.822446e+001],[-2.427184e+001,2.454868e+001],[-1.132686e+001,-4.860806e+001],[-7.087379e+001,-1.000506e+001],[1.974110e+001,-3.511051e+001],[-9.676375e+001,-2.390754e+001],[7.669903e+001,7.406783e+000],[6.796117e+000,-1.432428e+001],[100,100],[5.161290e+000,-4.853346e+001],[8.645161e+001,2.076077e+001],[100,5.155820e+001],[-9.419355e+001,-9.986251e+001],[-4.903226e+001,1.000000e+002],[8.193548e+001,-1.139780e+002],[-1.303226e+002,9.005500e+001],[-1.067358e+002,100],[100,-4.582260e+001],[-1.968912e+001,2.657343e+001],[4.559585e+001,-1.022451e+002],[7.461140e+001,9.819654e+001],[-4.870466e+001,-4.118513e+001],[-4.507772e+001,-3.551711e+001],[-3.492063e+001,-6.433942e+001],[1.000000e+002,4.414608e+001],[-1.539683e+002,-1.599356e+002],[2.857143e+001,100],[6.031746e+001,8.012889e+001],[100,100],[7.554585e+001,-7.314906e+001],[-1.200873e+002,3.287266e+001],[-5.545852e+001,-5.972359e+001],[-1.217391e+002,-8.329177e+001],[1.000000e+002,-1.670823e+001],[2.173913e+001,100],[100,-100],[-1.000000e+002,100],[-1.223022e+001,-1.177016e+001],[4.820144e+001,-1.946247e+000],[-3.597122e+000,-4.541242e+000],[-6.978417e+001,-1.677479e+001],[-9.568345e+001,-3.049120e+001],[-1.223022e+001,1.204819e+000],[-8.129496e+001,-1.251158e+001],[100,2.873031e+000],[3.956835e+001,100],[2.158273e+000,-2.937905e+001],[5.035971e+000,-2.307692e+001],[7.985612e+001,2.641335e+001],[1.125265e+001,-2.109777e+001],[-8.917197e+001,-2.041166e+001],[-6.114650e+001,-2.264151e+001],[1.910828e+000,4.631218e+000],[100,100],[3.927813e+001,-5.488851e+000],[-6.815287e+001,-1.372213e+001],[-1.210191e+001,-1.080617e+001],[2.059448e+001,9.605489e+000],[6.581741e+000,-6.174957e+000],[5.095541e+001,-1.389365e+001],[-8.154762e+001,-1.009934e+001],[4.642857e+001,8.112583e+000],[5.833333e+001,5.629139e+000],[-7.857143e+001,-1.655629e-001],[-1.053571e+002,-3.410596e+001],[3.154762e+001,-4.321192e+001],[-2.797619e+001,-2.727649e+001],[100,2.611755e+001],[8.214286e+001,100],[-25,-25],[-9.411765e+001,-4.883850e+001],[2.941176e+001,1.462942e+001],[-8.352941e+001,-5.854535e+001],[-3.058824e+001,-5.530973e-002],[8.235294e+001,100],[-9.411765e+000,-5.282080e+001],[100,-1.946903e+001],[1.882353e+001,-1.623341e+001],[-1.294118e+001,8.133296e+001],[100,9.723624e+001],[-1.395161e+002,-5.911384e+001],[3.467742e+001,-5.477078e+001],[6.733871e+001,-6.404913e+000],[-4.516129e+001,-6.799737e+000],[-3.064516e+001,-3.384514e+001],[2.016129e+000,100],[2.016129e+001,-6.365431e+001],[-8.870968e+000,2.735249e+001],[-4.840000e+001,-6.030534e+001],[4.960000e+001,2.868467e+001],[-5.680000e+001,-5.455079e+001],[-4.280000e+001,4.844392e+000],[2.720000e+001,1.306518e+001],[-2.880000e+001,-3.173811e+001],[100,100],[-4.322581e+001,-4.471718e+001],[-3.935484e+001,-5.048026e+001],[100,-9.498399e+000],[-1.225806e+001,2.828175e+001],[2.645161e+001,100],[-3.161290e+001,-2.358591e+001],[-8.518519e+001,-2.386457e+001],[-1.222222e+002,-3.005780e+001],[4.444444e+001,-2.510322e+001],[100,-2.097440e+001],[6.296296e+001,100],[-5.789474e+001,6.368876e+001],[-4.385965e+001,-7.060519e+001],[100,100],[1.754386e+000,-9.308357e+001],[-1.411765e+002,-7.859989e+001],[4.117647e+001,-2.140011e+001],[100,100],[-1.000000e+002,100],[100,-1.000000e+002],[-8.883249e+000,-9.262871e+000],[6.040609e+001,-3.005070e+001],[-8.477157e+001,-2.307917e+001],[-3.197970e+001,-3.867005e+001],[100,2.001755e+001],[8.020305e+001,2.052457e+001],[-2.538071e+001,-2.206513e+001],[2.081218e+001,2.052457e+001],[-5.507614e+001,-1.471334e+001],[1.015228e+000,-1.319228e+001],[-7.157360e+001,-6.474259e+000],[4.060914e+001,100],[-2.538071e+001,-3.558892e+000],[-9.887640e+001,2.357542e+001],[-6.179775e+001,-5.445810e+001],[-2.471910e+001,-3.595531e+001],[4.943820e+001,1.445810e+001],[-4.494382e+001,-2.791061e+001],[8.988764e+001,-4.963128e+001],[100,2.491620e+001],[8.988764e+000,7.479330e+001],[-7.191011e+001,-5.794413e+001],[-2.134831e+001,-5.553073e+001],[6.966292e+001,100],[5.617978e+000,4.368715e+001],[-4.483986e+001,-4.074961e+001],[-8.007117e+001,-2.425820e+001],[5.302491e+001,1.719938e+001],[4.911032e+001,-3.032795e+001],[-9.964413e+001,-6.621551e+000],[-3.701068e+001,-2.357106e+001],[-3.309609e+001,100],[6.476868e+001,1.593961e+001],[-9.608541e+000,-2.574701e+001],[3.736655e+001,-2.380010e+001],[100,4.193649e+001],[4.347826e+000,100],[-1.391304e+002,-1.352802e+001],[-6.956522e+001,-5.864020e+001],[4.782609e+001,1.971332e+001],[-4.782609e+001,-7.726199e+001],[100,-3.443035e+001],[6.086957e+001,-9.435154e+000],[-6.086957e+001,-5.537798e+001],[5.217391e+001,6.094406e+001],[-1.304348e+001,6.450833e+001],[6.521739e+001,3.507977e+000],[-6.363636e+001,-3.758328e+001],[-1.863636e+001,-2.382348e+001],[10,-1.549983e+001],[1.818182e+000,-3.164623e+001],[3.863636e+001,5.847015e+001],[3.863636e+001,100],[100,3.301305e+001],[-1.086364e+002,-3.453373e+001],[1.818182e+000,-4.839665e+001],[-1.229508e+002,-2.832938e+001],[6.502732e+001,3.758746e-001],[4.316940e+001,-2.533395e+001],[-1.366120e+001,100],[-3.989071e+001,-3.957092e+001],[-9.289617e+000,-2.911583e+001],[-2.240437e+001,2.628231e+001],[100,-4.308102e+000],[-8.162162e+001,100],[5.837838e+001,2.065902e+000],[100,-2.689700e+001],[-5.891892e+001,2.023318e+001],[9.189189e+000,-3.724147e+001],[-6.270270e+001,-6.099992e+001],[3.567568e+001,2.839320e+000],[-1.509615e+002,-1.167452e+001],[-2.115385e+001,-2.475375e+001],[100,-3.212848e+001],[-1.250000e+001,-3.778158e+001],[4.807692e+001,100],[3.653846e+001,6.338330e+000],[-4.462810e+001,-1.667952e+001],[-1.479339e+002,-2.361861e+001],[8.140496e+001,-2.079157e+001],[1.115702e+001,100],[100,-3.891031e+001],[-30,-2.554288e+001],[90,-6.149984e+001],[-160,100],[100,-1.295729e+001],[-50,100],[-50,-4.327953e+001],[100,-5.672047e+001],[-1.000000e+002,100],[100,-100],[3.986784e+001,-7.446213e+001],[-7.466960e+001,3.725107e+000],[-5.176211e+001,-1.219061e+002],[4.273128e+001,-8.971817e+001],[-1.167401e+001,-1.216661e+001],[-1.004405e+002,-6.319346e+001],[8.370044e+000,7.613353e+001],[6.277533e+001,3.712660e+001],[-3.458150e+001,7.250178e+000],[8.281938e+001,6.110864e+001],[-7.753304e+001,1.187322e+001],[100,6.422920e+001],[1.409692e+001,100],[2.382271e+001,6.014110e+001],[-3.601108e+000,-1.390142e+001],[-1.193906e+002,-5.249328e+001],[4.210526e+001,-3.823911e+001],[-8.891967e+001,-4.440272e+001],[-7.368421e+001,-2.643982e+001],[3.905817e+001,-3.978331e+001],[-2.188366e+001,-4.592052e+001],[2.686981e+001,4.984642e+001],[100,100],[7.562327e+001,5.119265e+001],[-7.142857e+001,-1.266414e+002],[3.928571e+001,-1.060839e+002],[-50,100],[-2.142857e+001,7.606260e+001],[100,-3.417909e+001],[1.785714e+001,-9.732383e+000],[-4.642857e+001,-7.358089e+001],[-1.142857e+002,3.254005e+001],[7.857143e+001,9.361052e+001],[6.785714e+001,4.800444e+001],[-4.819277e+001,-1.258049e+001],[9.638554e+000,-4.481278e+001],[-5.180723e+001,-1.016575e+002],[-5.542169e+001,100],[-6.987952e+001,-8.441450e+001],[7.831325e+001,-1.012640e+002],[3.132530e+001,9.914143e+001],[6.024096e+000,7.281183e+001],[100,7.277606e+001],[-2.338308e+001,-9.834298e+001],[-3.532338e+001,-1.995869e+001],[-5.920398e+001,1.629404e+001],[1.641791e+001,7.002954e+001],[4.825871e+001,-1.398381e+001],[-8.706468e+001,-3.434836e+001],[4.029851e+001,-1.968973e+001],[100,100],[6.455696e+001,7.064001e+001],[7.341772e+001,-6.742926e+001],[1.000000e+002,-5.223790e+001],[4.683544e+001,100],[-6.835443e+001,-3.265626e+001],[-2.189873e+002,8.874991e+001],[2.531646e+000,-1.070665e+002],[1.000000e+002,9.908706e+000],[-1.251101e+002,-7.507360e+001],[-5.418502e+001,-4.907840e+001],[5.374449e+001,2.930552e+001],[4.140969e+001,3.593854e+001],[1.982379e+001,-5.100077e+001],[-3.568282e+001,100],[100,-2.317696e+001],[-3.846154e+000,-3.803065e+001],[-2.692308e+001,8.620529e+000],[4.230769e+001,-8.649327e+001],[-1.769231e+002,3.908035e+001],[6.538462e+001,100],[100,6.354672e+001],[-1.630208e+002,-1.690753e+002],[-1.979167e+001,100],[2.447917e+001,-2.504041e+001],[5.833333e+001,3.056903e+001],[-1.428571e+001,-2.437838e+001],[-1.285714e+002,-1.420252e+001],[4.285714e+001,-6.141910e+001],[100,100],[1.230769e+001,-4.847043e+001],[-1.123077e+002,-5.152957e+001],[100,1.000000e+002],[100,-100],[-100,100]];
  var series2 = [[-250,-6.485000e+001],[-240,-6.225600e+001],[-230,-5.966200e+001],[-220,-5.706800e+001],[-210,-5.447400e+001],[-200,-5.188000e+001],[-190,-4.928600e+001],[-180,-4.669200e+001],[-170,-4.409800e+001],[-160,-4.150400e+001],[-150,-3.891000e+001],[-140,-3.631600e+001],[-130,-3.372200e+001],[-120,-3.112800e+001],[-110,-2.853400e+001],[-100,-2.594000e+001],[-90,-2.334600e+001],[-80,-2.075200e+001],[-70,-1.815800e+001],[-60,-1.556400e+001],[-50,-1.297000e+001],[-40,-1.037600e+001],[-30,-7.782000e+000],[-20,-5.188000e+000],[-10,-2.594000e+000],[0,5.915000e-011],[10,2.594000e+000],[20,5.188000e+000],[30,7.782000e+000],[40,1.037600e+001],[50,1.297000e+001],[60,1.556400e+001],[70,1.815800e+001],[80,2.075200e+001],[90,2.334600e+001],[100,2.594000e+001],[110,2.853400e+001]];
  
  var plot3 = $.jqplot('targetdiv', [series1,series2],
  {	
		axes:{
			xaxis:{label: 'WNTS Adj.',
			min: -250,
			max: 110,
			numberTicks: 8,
			tickInterval: 50
			},
			yaxis:{
				labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
				label:'Dialidol Adj.',
				min: -200,
				max: 110,				
				numberTicks: 7,
				tickInterval: 50
				}
			},
		series:[
			{				
				showLine: false,
				markerOptions: { size: 4, style:"filledCircle",color: "#0000FF" }
			},
			{				
				showMarker: false	,
				color: "#000000"
			}
		]
  });
    
});