from collections import deque

editor_left=list(input()) # 커서 왼쪽
editor_right=deque() # 커서 오른쪽
command_num=int(input())
command_arr=[]
for _ in range(command_num):
    command = input().split()
    command_arr.append(command)

for cmd in command_arr:
    if cmd[0] == 'L': # 커서 왼쪽으로 move
        if len(editor_left) > 0:
            char=editor_left.pop()
            editor_right.insert(0, char)
    elif cmd[0] == 'D': # 커서 오른쪽으로 move
        if len(editor_right) > 0:
            char=editor_right.popleft()
            editor_left.append(char)
    elif cmd[0] == 'B': # 커서 왼쪽 삭제
        if len(editor_left) > 0:
            editor_left.pop()
    else: # 커서 왼쪽에 문자 추가
        editor_left.append(cmd[1])

print("".join(editor_left)+"".join(editor_right))