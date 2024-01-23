# 1. Content
Create **Express app** which can access data ( write and get data) from local file in Docker host.

# 2. How to do that
## Step 1: Create dockerfile

## Step 2: Create app.js

## Step 3: Create Docker volume
`docker volume create myvolume`


## Step 4: Chạy container và mount volume vào thư mục /app/data
`docker run -d -v myvolume:/app/data -p 8080:3000 vandai1042001/mydemo`



# 3. Pull from Docker Hub ( if you dont need to build like above step)
`docker login`

`docker pull vandai1042001/mydemo:latest`

 - After that you do step 3, 4 above.