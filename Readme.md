//================================================================
Framework express để viết api và nodemon để tự động khởi động lại server node mỗi khi code thay đổi:
npm install --save express

npm install --save-dev nodemon

Tiếp theo là những gói module cần thiết để cài đặt Babel cho dự án:
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime

npm install --save @babel/runtime

express:
Web Framework huyền thoại cho Node.js rồi nên mình không cần giải thích nhiều nhé.
nodemon:
Sử dụng để tự khởi động lại server node mỗi khi chúng ta update code, dùng để dev.
@babel/core:
Gói core cơ bản của Babel, dùng để chạy bất kỳ các thiết lập / cấu hình của babel.
@babel/cli:
Sử dụng để biên dịch các files từ dòng lệnh.
@babel/node:
Là một CLI tương tự Node CLI, sử dụng để biên dịch tương thích với các cài đặt của Babel Preset và Babel Plugins
@babel/preset-env:
Thằng này khá là hay, nó là một smart preset tự động sử dụng phiên bản Javascript mới nhất mà không cần khai báo cụ thể từng phiên bản một. Nói chung nó giúp cho cuộc sống dev của chúng ta dễ dàng hơn rất nhiều =))
@babel/plugin-transform-runtime:
Plugin này cho phép babel tái sử dụng lại code của chính nó để giảm kích thước code.
@babel/runtime:
Theo như tài liệu chính thức của Babel thì gói này nên được install ở dependencies thay vì devDependencies vì nó sẽ phụ thuộc vào code sau khi đã triển khai xong. Tác dụng của nó là để tái sử dụng lại code hay cũng có thể hiểu là để tránh trùng lặp code sau khi đã build xong hết code ở production, bởi vì đôi khi Babel sẽ biên dịch ra các mã code giống nhau giữa các files.

//================================================================
Một file .babelrc nữa nằm ở ngoài cùng của dự án (cùng cấp với thư mục src)

{
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-runtime"]
  ]
}

//================================================================
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rmdir /s build && mkdir build",
    "build-babel": "babel ./src -d ./build",
    "build": "npm run clean && npm run build-babel",
    "production": "npm run build && node ./build/src/server.js",
    "dev": "nodemon --exec ./node_modules/.bin/babel-node ./src/server.js"
  },

npm run clean: Làm sạch bằng cách xoá thư mục build hiện tại và tạo ra một thư mục build rỗng mới.
npm run build-babel: Biên dịch toàn bộ code trong thư mục src sang thư mục build/src để code tương thích với các trình duyệt cũ hoặc môi trường cũ hơn.
npm run build: Kết hợp của 2 lệnh trên.
npm run production: Build xong code thì chạy ứng dụng.
npm run dev: Sử dụng nodemon và babel để biên dịch code và chạy ứng dụng cho quá trình dev.