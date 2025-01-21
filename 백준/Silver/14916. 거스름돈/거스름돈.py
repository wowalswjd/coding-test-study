money=int(input())

def solution(money): 
    if money == 1 or money == 3:
        return -1

    count=money // 5 # 5원으로 최대한 많이 거슬러줌
    money %= 5 # 남은 금액
    
    # 나머지가 2원으로 나누어지면 그대로 처리
    if money % 2 == 0:
        count += money // 2
    else:
        # 5원짜리 하나를 빼고 다시 계산
        count -= 1
        money += 5  
        count += money // 2  # 2원짜리 동전으로 나누어줌
    return count
    
print(solution(money))