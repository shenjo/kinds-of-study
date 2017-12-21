#!/bin/sh


myName='joey shen'
echo ${myName}
echo $myName


for skill in Ada Coffe Action Java; do
	echo "I am good at ${skill}Script"
done

#单引号字符串的限制：

#单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的
#单引号字串中不能出现单引号（对单引号使用转义符后也不行）

your_name='Tom, ${myName}'
echo $your_name

str="Hello, I know your are \"$your_name\"! \n"
echo ${str}