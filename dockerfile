# Sử dụng image cơ bản với Node.js
FROM node:14

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ nội dung của thư mục local vào container
COPY . .

# Mở cổng 3000 để ứng dụng có thể lắng nghe
EXPOSE 3000

# Khởi chạy ứng dụng khi container được khởi động
CMD ["npm", "start"]