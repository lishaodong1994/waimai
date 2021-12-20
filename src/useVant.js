import Vue from 'vue'
import { Button } from 'vant';
import { Grid, GridItem  } from 'vant';
import { Image as VanImage } from 'vant';
import { Rate } from 'vant';
import { Skeleton } from 'vant';
import { Icon } from 'vant';
import { Dialog } from 'vant';
import { Tag } from 'vant';
import { Toast } from 'vant';
import { Popup } from 'vant';
import { Sticky } from 'vant';
import { Overlay } from 'vant';

Vue.use(Overlay);

Vue.use(Sticky);

Vue.use(Popup);
Vue.use(Toast);

Vue.use(Tag);

Vue.prototype.$Dialog = Dialog
Vue.prototype.$Toast = Toast
Vue.use(Icon);
Vue.use(Skeleton);

Vue.use(Rate);

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(VanImage)
