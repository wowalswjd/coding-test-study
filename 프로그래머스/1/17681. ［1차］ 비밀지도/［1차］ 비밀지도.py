def make_digit_two(n, digit_ten):
    two_arr=[] # 이진법 변환한 리스트
    share=digit_ten # 몫 초기화
    while share>0:
        remainder=share%2 # 나머지
        share=share//2
        two_arr.append(remainder)
    # 10진법 수를 2진법으로 변환했을 때 길이가 n보다 작을 경우 부족한만큼 0 추가
    if len(two_arr)<n:
        for i in range(n-len(two_arr)):
            two_arr.append(0)
    
    return list(reversed(two_arr))

def solution(n, arr1, arr2):
    answer = []
    arr1_two=[]
    arr2_two=[]
    
    # 2진법으로 변환
    for elem1, elem2 in zip(arr1, arr2):
        arr1_two.append(make_digit_two(n, elem1))
        arr2_two.append(make_digit_two(n, elem2))
    
    # 요소 비교해서 #와 ' '으로 변환
    for i in range(n):
        row=""
        for j in range(n):
            if arr1_two[i][j] == 0 and arr2_two[i][j] == 0:
                row+=" "
            else:
                row+="#"
        answer.append(row)
                
    return answer

