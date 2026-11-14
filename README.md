# Flip — Landing Page

Landing page giới thiệu **Flip**, ứng dụng kết nối ẩn danh qua khoảnh khắc tại cùng địa điểm, được phát triển bởi nhóm **TraidepBk — Lớp L02** trong môn Mobile Application Development.

## Về Flip

Flip tạo cơ hội làm quen từ những khoảnh khắc đời thường, giúp giảm áp lực khi chủ động bắt chuyện. Người dùng xác nhận địa điểm, đăng ảnh ẩn danh và khám phá những người cùng không gian. Khi cả hai cùng Like, cuộc trò chuyện được mở.

## Phạm vi landing page

Website trình bày ý tưởng, điểm nổi bật, cách sử dụng và giao diện của Flip: Phần giới thiệu sản phẩm, các chức năng check-in, matching và chat thuộc ứng dụng mobile.


## Công nghệ

- React 19 và TypeScript
- Vite 8 để chạy môi trường phát triển và tạo bản build

## Chạy tại máy

Cài Node.js và npm tương thích với phiên bản Vite được khai báo trong `package.json` của repository. Yêu cầu **Node.js 20.19+ thuộc nhánh 20 hoặc Node.js 22.12+** theo yêu cầu của Vite đang cài đặt, cùng npm.

Trong thư mục dự án, chạy:

```bash
npm install
npm run dev
```

Mở địa chỉ mà Vite hiển thị trong terminal, thường là `http://localhost:5173`.

### Build và xem thử

```bash
npm run build
npm run preview
```

Với cấu hình Vite mặc định, kết quả build nằm trong thư mục `dist/`. Kiểm tra các script thực tế trong `package.json` nếu dự án đã thay đổi cấu hình.

## Cấu trúc dự án

```text
flip-landing-page/
├── public/                 # Tài nguyên được phục vụ trực tiếp
├── src/
│   ├── assets/             # Logo và hình ảnh hero, màn hình, tải ứng dụng
│   ├── components/         # Header, Footer, BackToTop và CSS tương ứng
│   ├── sections/           # Các phần nội dung của landing page
│   ├── App.tsx             # Ghép các phần đang hiển thị trên trang
│   ├── main.tsx            # Khởi tạo ứng dụng React
│   └── index.css           # CSS toàn cục
├── index.html              # HTML gốc, tiêu đề, favicon và Google Fonts
├── package.json            # Dependencies và các lệnh npm
├── package-lock.json       # Khóa phiên bản dependencies
├── tsconfig.json           # Cấu hình TypeScript
└── vite.config.ts          # Cấu hình Vite
```

## Nhóm thực hiện

- **Nhóm:** TraidepBk — Lớp L02
- **Môn học:** CO4034 — Mobile Application Development
- **GitHub:** [L02-Traidepbk-MobileDev](https://github.com/L02-Traidepbk-MobileDev)