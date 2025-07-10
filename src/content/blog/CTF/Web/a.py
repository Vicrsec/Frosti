import jwt
import base64
import itertools

# JWT Token
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoc2luY2h1Z193cDEiLCJleHAiOjE3MzYyNTYwMjh9.N1EuNDRc5XVDKiKTKXAJ3sRf-xSMmHxJE5NSJxcCnCo"

# 字符集
charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

# 将 JWT 分为三部分
header, payload, signature = token.split('.')

# Base64 解码 Header 和 Payload（可选）
decoded_header = base64.urlsafe_b64decode(header + "==").decode()
decoded_payload = base64.urlsafe_b64decode(payload + "==").decode()

print(f"Header: {decoded_header}")
print(f"Payload: {decoded_payload}")

# 爆破函数
def jwt_brute_force(token, charset, key_prefix, key_suffix, key_length):
    for combination in itertools.product(charset, repeat=key_length):
        key_middle = combination  # 拼接中间部分
        key = f"{key_prefix}{key_middle}{key_suffix}"  # 拼接完整密钥
        try:
            # 使用当前密钥验证签名
            decoded = jwt.decode(token, key, algorithms=["HS256"])
            print(f"[+] 密钥找到: {key}")
            print(f"解码后的 Payload: {decoded}")
            return key
        except jwt.InvalidSignatureError:
            # 签名无效，继续尝试
            pass
        except Exception as e:
            # 捕获其他异常（非签名问题）
            pass
    print("[-] 爆破失败，未找到正确密钥")
    return None

# 调用爆破函数
key_prefix = "4a4f7d6e8b5"  # 固定前缀
key_suffix = "c7f"          # 固定后缀
key_length = 4              # 中间未知部分的长度
key = jwt_brute_force(token, charset, key_prefix, key_suffix, key_length)

if key:
    print(f"成功破解密钥: {key}")
else:
    print("破解失败")