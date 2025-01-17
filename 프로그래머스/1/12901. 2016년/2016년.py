def solution(a, b):
    day_count=0
    day=['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED','THU'] # 요일 순서
    month=[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] # 달 순서
    for i in range(a):
        # 마지막 달에만 일을 더해줌
        if i == a-1:
            day_count+=b
        else:
            day_count+=month[i]
    return day[day_count%7-1 if day_count % 7 != 0 else 6]

# 31 29 31 30 31 30 31 30 31 30 31 30
# 5월 24일 = 31+29+31+30+24