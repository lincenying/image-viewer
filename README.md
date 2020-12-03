# image-viewer

##### install

```bash
yarn add image-viewer
# or
npm install image-viewer --save
```

```
prop:
z-index: z轴
initial-index: 当前图片的index
on-close: 关闭回调事件
on-switch: 切换图片回调事件
close-on-click-mask: 是否可以点击遮罩层关闭
url-list: 图片地址数组
```

```javascript
import imageViewer from 'image-viewer'
Vue.use(imageViewer)
```

```html
<image-viewer
    v-if="image.visible"
    :z-index="99"
    :initial-index="image.index"
    :on-close="ccc"
    :on-switch="onSwitch"
    :close-on-click-mask="true"
    :url-list="image.imgUrl"
/>
```

```javascript
export default {
    data() {
        return {
            image: {
                visible: false,
                index: 0,
                imgUrl: []
            }
        }
    },
    mounted() {
        this.image.imgUrl = ['图片1', '图片2']
        this.image.index = 0
        this.image.visible = true
    },
    methods: {
        closeViewer() {
            this.image.visible = false
        },
        onSwitch() {}
    }
}
```

License

MIT
