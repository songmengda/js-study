## # git常用命令速查表

###### #创建版本库

```bash
git clone <url>																							克隆远程版本库
```

```bash
git init 																										初始化本地版本库
```

###### #修改和提交

```bash
git status																									查看状态
```

```bash
git diff																										查看变更内容
```

```bash
git add	.																										跟踪所有改动过的文件
```

```bash
git add <file>																							跟踪指定的文件
```

```bash
git mv <old><new>																						文件改名
```

```bash
git rm <file>																								删除文件
```

```bash
git rm --cached <file>																			停止跟踪文件但不删除
```

```bash
git commit -m"commit message"																提交所有更新过的文件
```

```bash
git commit --amend																					修改最后一次提交
```

###### #查看提交历史

```bash
git log  																										查看提交历史
```

```bash
git log -p <file>																						查看指定文件的提交历史
```

```bash
git blame <file>																						以列表方式查看指定文件																														 的提交历史
```

###### #撤销

```bash
git reset --hard HEAD																				撤销工作目录中所有未提																														 交文件的修改内容
```

```bash
git checkout HEAD <file>																		撤销指定的未提交文件的																														 修改内容
```

```bash
git revert <commit>																					撤销指定的提交
```

###### #分支与标签

```bash
git branch																									显示所有本地分支
```

```bash
git checkout <branch/tag>																		切换到指定分支或标签
```

```bash
git branch <new-branch>																			创建新分支
```

```bash
git branch -d <branch>																			删除本地分支
```

```bash
git tag																											列出所有本地标签
```

```bash
git tag <tagname>																						基于最新提交创建标签
```

````bash
git tag -d <tagname>																				删除标签
````

###### #合并与衍合

```bash
git merge <branch>																					合并指定分支到当前分支
```

```bash
git rebase <branch>																					衍合指定分支到当前分支
```

###### #远程操作

```bash
git remote -v																								查看远程版本库信息
```

```bash
git remote show <remote>																		查看指定远程版本库信息
```

```bash
git remote add <remote> <url>																添加远程版本库
```

```bash
git fetch <remote>																					从远程库获取代码
```

```bash
git pull <remote><branch>																		下载代码及快速合并
```

```bash
git push <remote><branch>																		上传代码及快速合并
```

```bash
git push <remote> :<branch/tag-name>												删除远程分支或标签
```

```bash
git push --tags																							上传所有标签
```

























