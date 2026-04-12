# 部署文档

## 服务器信息

| 项目 | 内容 |
|------|------|
| 操作系统 | Ubuntu 24.04 LTS |
| 用户名 | `YOUR_SSH_USER` |
| 网站域名 | `YOUR_DOMAIN` |
| 网站根目录 | `/var/www/YOUR_DOMAIN/` |
| Nginx 配置 | `/etc/nginx/sites-available/YOUR_DOMAIN` |
| SSL 证书 | Let's Encrypt，自动续签 |

---

## 本地更新部署

每次本地修改完文件后，运行以下命令同步到服务器：

```bash
export SSHPASS='YOUR_SSH_PASSWORD'
sshpass -e rsync -avz --progress \
  -e "ssh -o StrictHostKeyChecking=no" \
  --exclude="archive" \
  --exclude="*.command" \
  --exclude="start.py" \
  --exclude="README.md" \
  --exclude="LICENSE" \
  --exclude="DEPLOY.md" \
  "/path/to/local/learn-ai/" \
  YOUR_SSH_USER@YOUR_SERVER_IP:/var/www/YOUR_DOMAIN/
```

同步完成后无需重启 Nginx，静态文件直接生效。

---

## SSH 登录服务器

```bash
sshpass -p 'YOUR_SSH_PASSWORD' ssh -o StrictHostKeyChecking=no YOUR_SSH_USER@YOUR_SERVER_IP
```

---

## Nginx 常用命令

```bash
# 检查配置语法
sudo nginx -t

# 重载配置（不中断服务）
sudo systemctl reload nginx

# 重启 Nginx
sudo systemctl restart nginx

# 查看状态
sudo systemctl status nginx

# 查看访问日志
sudo tail -f /var/log/nginx/access.log

# 查看错误日志
sudo tail -f /var/log/nginx/error.log
```

---

## SSL 证书管理

```bash
# 手动检查证书状态
sudo certbot certificates

# 手动续签（通常无需手动操作，已配置自动续签）
sudo certbot renew

# 测试续签流程（不实际续签）
sudo certbot renew --dry-run
```

---

## Nginx 配置参考

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;

    root /var/www/YOUR_DOMAIN;
    index index.html;

    ssl_certificate /etc/letsencrypt/live/YOUR_DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/YOUR_DOMAIN/privkey.pem;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg)$ {
        expires 7d;
        add_header Cache-Control "public";
    }

    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
}
```
