# 如何在PYPI上传包

## 第一步：需要您有最新版的pip和Python
## 第二步：您需要有PYPI账号和API令牌

## 开始：
创建以下路径：
```
您的包名称
├── LICENSE
├── README.md
├── 包名称
│   ├── __init__.py
│   └── 您的函数名称.py
└── setup.py
```

在“setup.py”里写入：
```Python
import setuptools

with open("README.md", "r", encoding="UTF-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="您的包名",
    version="1.4.5",
    author="您的网名",
    author_email="您的邮箱",
    description="您的包的介绍",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="您的存储包的网站(GitHub等)",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3.6",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
    extras_require={"您的包名称": ["python"]},
)
```

在“README.md”里写入：
```
# 您的包名称

您的包介绍
```

在“LICENSE”里写入：
```
Copyright (c) 2018 The Python Packaging Authority

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

在“__init__.py”里写入：
```Python
from .您的函数名称 import *
```

在“您的函数名称.py”里写入：
```Python
def 您的函数名称(函数值):
    您的代码
```

### 恭喜您，您完成了一半！

## 接着：

#### [生成配置文件]
python setup.py sdist bdist_wheel

（这会输出大量文本，确保没有错误）

#### [上传到PYPI]
twine upload dist/*

（这里需要输入您的账号密码，密码在输入时显示不出来为正常现象）

#### 在此之前，请确保：
python -m pip install --user --upgrade setuptools wheel

（已安装setuptools和wheel库）

python -m pip install --user --upgrade twine

（已安装twine库）


## 另外：
#### 此文章不含有侵权行为：[在PyPI上传包](https://www.bilibili.com/read/pcpreview?aid=111783)
