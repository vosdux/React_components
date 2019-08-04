import React from 'react';
import Image from './Image';

const ImgSandbox = () => (
  <div>
    <h1>Картинки</h1>
    <h2><span>Плейсхолдер</span></h2>
    <Image />

    <h2><span>Картинка с src и alt аттрибутами</span></h2>
    <Image
      src="https://yt3.ggpht.com/a-/AN66SAxaodVdRdyJ3YuM24rQ07_py_oWfFdEvVBp=s100-mo-c-c0xffffffff-rj-k-no"
      alt="youtube"
    />

    <h2><span>Плейсхолдеры разных размеров</span></h2>
    <Image width={50} height={50} style={{ marginRight: '20px' }} />
    <Image width={100} height={100} style={{ marginRight: '20px' }} />
    <Image width={150} height={150} />

    <h2><span>Круглая картинка</span></h2>
    <Image
      src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
      width={150}
      height={150}
      circle
    />
  </div>
);

export default ImgSandbox;