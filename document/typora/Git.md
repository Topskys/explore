## Git



###### 一、Git仓库本地基础操作

```js
# 初始化
git init

# 全局配置user.name和user.email
git config --global user.name="string"
git config --global user.email="string"

# 查看Git配置
// 1.可以找到Git配置config文件进行查看
// 2.通过git命令
git config --list --global
git config user.name
git config user.email

# 查看git状态
// 红色没有存到暂存区，绿色已存到暂存区;red的 M 表示文件已经被修改，green的 M 表示文件已经被修改并且已经存放到暂存区 
git status
git status -s / --short

# 清空终端
clear

# 跟踪文件，暂存区
// 绿色表示已跟踪，等待提交到本地Git仓库
git add <fileName>
// 一次性提交多个文件到暂存区
git add . / *

# 提交更新到Git仓库
// 提价完成后working被清空，说明提交的文件已经被Git管理
git commit
git commit -m "string"

# 撤销对文件的修改：把对工作区中对应文件的修改，还原成Git 仓库中做保存的版本。注意：所有修改将会丢失，无法恢复！
git checkout -- fileName

# 从暂存区移除文件
// green --> red
git reset HEAD fileName
git reset HEAD .

# 跳过使用暂存区
//工作区-->暂存区--> Git仓库 》》 工作区-->Git 仓库
git commit -a -m "string"

# 从Git仓库移除文件
//1、两个地方都移除
git rm -f fileName

//2、只从Git仓库中移除，工作区还保留
git rm --cached fileName

# 忽略文件
// 以 # 开头的是注释、以 / 结尾的是目录、以 / 开头的是防止递归、以 ！开头表示取反、使用 glob 模式进行文件和文件夹的匹配（glob指间化了的正则表达式）

//所谓的 glob模式是指简化了的正则表达式:
//1、星号*匹配零个或多个任意字符
//2、[abc]匹配任何一个列在方括号中的字符（此案例匹配一个a或匹配一个b或匹配一个c)
//3、问号﹖只匹配一个任意字符
//4、在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如[0-9]表示匹配所有О到9的数字)
//5、两个星号**表示匹配任意中间目录（比如a/**/z可以匹配 a/z、a/b/z或a/b/c/z等)

//例子：
//1#忽略所有的.a文件
//2 *.a
//4#但跟踪所有的lib.a。即便你在前面忽略了.a文件
//5 !lib.a
//6
//7#只忽略当前日录下的 TODO文件，而不忽略subdir/TODO
//8 /TODO
//9
//10 #忽略任何目录下名为build的文件夹11 build/
//12
//13#忽略doc/notes.txt，但不忽略doc/serveriarch.txt14 
//doc/*.txt
//15
//16#忽略doc./目录及其所有子目录下的.pdf文件
//17 doc./** /*.pdf

# 查看提交历史
// 按时间先后顺序列出所有的提交历史，最近的提交排在最上面
git log
// 只展示最新的两条提交历史，数字可以按需进行填写
git log -2
// 在一行上展示最近两条提交历史的信息
git log -2 --pretty=oneline
// 在一行上展示最近两条提交历史的信息，并自定义输出的格式
// h 提交的简写哈希值‰an作者名字‰ar作者修订日期，按多久以前的方式显示%s提交说明
git log -2 --pretty=format: "%h | %an | %ar |%s"

# 在一行上展示所有的提交历史
git log --pretty=online

# 根据提交的 ID 回退到指定版本
git reset --hard <CommmitID>
    
# 回退旧版本中查看命令历史操作的历史
git reflog --pretty=online

# 再次根据最新的提交 ID 跳转到最新的版本
git reset --hard <CommitID>

```



###### 二、Github（Github、Gitlab、Gitee）

GPL、MIT

向Github远程仓库提交code

1.HTTPS

```js
// 基于 HTTPS url
// 1、本地没有现成的Git仓库
git init
git add .
git remote add origin url //关联远程仓库，并将仓库命名为origin 
git push -u origin master // 把本地仓库中的内容推送到远程的origin仓库

// 2、本地有现成的Git仓库
git remote add origin url
git push -u origin master //第一次推送
git push

//使用HTTPS 要每次输入github账号和密码，而SSH不需要，只要第一次配置好

```

2.SSH

```js
//1、生成SSH key
// 打开Git Bash
// 粘贴如下的命令，并将your_email@example.com替换为注册Github账号时填写的邮箱:
ssh-keygen -t rsa -b 4096 -c "your_email@example.com"
//连续敲击3次回车，即可在C:\Users\用户名文件夹\.ssh目录中生成 id_rsa和 id_rsa.pub两个文件

//2、配置SSH key 到github账号
// 使用记事本打开 id_rsa.pub文件，复制里面的文本内容
// 在浏览器中登录Github，点击头像-> Settings -> SSH and GPG Keys -> New sSH key
// 将id_rsa.pub文件中的内容，粘贴到Key对应的文本框中
// 在Title 文本框中任意填写一个名称，来标识这个Key 从何而来

//3、检查SSH key是否配置成功
ssh -T git@github.com --> YES -->OK

//4、把本地仓库上传github远程仓库

```

```js
# 克隆远程仓库SSH、HTTPS
git clone url
```

3.分支

```js
# 查看所有分支
git breach // * 表示当前所处分支

# 基于所处分支新建分支 * matser
git breach login //login 新功能分支

# 切换分支
git checkout login

# 基于master创建新-b分支并切换到新分支
git checkout -b reg

# 合并分支
git checkout master //1、切换到主分支，
git merge login //2、在master分支运行git merge xx，将long分支合并到master主分支。一般：先将分支上文件提交本地仓库再合并git commit

# 删除分支
git breach -d login //必须跳到其他分支再删除

# 分支合并冲突
git checkout master
git merge reg
// 分别在多个分支上修改了（不同修改）同一文件并提交本地仓库，合并时会出现合并冲突。解决: 打开包含冲突文件，手动解决,之后再执行：
git add .
git commit -m "string"



# 分支远程仓库操作

# 将本地分支推送到远程仓库
// 如果是第一次将本地分支推送到远程仓库，需要运行如下的命令:
// -u表示把本地分支和远程分支进行关联，只在第一次推送的时候需要带-u参数2 
git push -u 远程仓库的别名 本地分支名称:远程分支名称(现命名)
// 实际案例:
git push -u origin payment: pay
// 如果希望远程分支的名称和本地分支名称保持一致，可以对命令进行简化:
git push -u origin payment

# 查看远程仓库所有分支
git remote show 远程仓库的名称

# 跟踪远程分支
// 跟踪分支指的是:从远程仓库中，把远程分支下载到本地仓库中。需要运行的命令如下∶
// 从远程仓库中，把对应的远程分支下载到本地仓库，保持本地分支和远程分支名称相同
git checkout 远程分支的名称
// 示例:
git checkout pay
// 从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名
git checkout -b 本地分支名称 远程仓库名称/远程分支名称
// 示例:
git checkout -b payment origin/pay

# 拉取远程仓库更新的code
git pull // 现在在那个分支就更新那个分支的code

# 删除远程分支
git push origin --delete 远程分支名

# 删除本地分支
git checkout master
git breach -d reg
git breach -D reg //强制删除本地分支
```

