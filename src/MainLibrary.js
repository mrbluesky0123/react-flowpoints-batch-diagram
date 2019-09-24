import { getBaseLibrary } from "./libraries/base_library";
import { getPyTorchLibrary } from "./libraries/pytorch_library";
import { getTensorFlowLibrary } from "./libraries/tensorflow_library";
import { getPyTorchAutoparams } from "./libraries/pytorch_autoparams";

export function MainLibrary() {
  return {
    // newly added
    data: null,
    flowpoints: {},
    environment: {
      getBaseLibrary: getBaseLibrary,
      baseLib: getBaseLibrary(),
      library: 'pytorch',
      libraryFetchers: {
        pytorch: getPyTorchLibrary,
        tensorflow: getTensorFlowLibrary
      },
      autoparams: {
        pytorch: getPyTorchAutoparams
      },
      availableLayers: [],
      code: 'Dont panick',
      encrypted_model: '',
      notes: '',
      order: [],
      dummies: {},
      batch_first: true,
      modelname: 'NeuralNet',
      include_training: true,
      include_saveload: true,
      include_predict: true,
    },
    visual: {
      darkTheme: false,
      theme: 'black',
      background: 'black',
      variant: 'outlined',
      drawerOpen: false,
      drawerWidth: 10,
      showShape: false,
      showName: false,
      snap: true,
      show_load_dialog: false,
      load_dialog_error: false,
      show_save_dialog: false,
      show_help_dialog: false,
      show_batch_name: null
    },
    settings: {
      tab: 'Misc',
      modelID: null,
      baseUrl: window.location.href.split('/?')[0],
      count: 0,
      selected: null,
      lastPos: {x:50, y:-40}
    },
    notification: {
      show: false,
      content: {
        msg: 'Hello world',
        color: '#00e676'
      },
      queue: []
    }
  }
}