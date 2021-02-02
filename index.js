import ImageViewer from './image-viewer.vue';
import './fonts/iconfont.css';
import './image.css';

/* istanbul ignore next */
ImageViewer.install = function(Vue) {
  Vue.component(ImageViewer.name, ImageViewer);
};

export default ImageViewer;