def solution(k, m, score):
    # 최대 k점, m개 씩 포장, 사과들의 점수
    answer = 0
    score.sort(reverse=True)
    box_num = len(score)//m
    
    for i in range(box_num):
        # 각 상자의 최저 점수 * 한 상자 사과 개수
        answer += min(score[i*m:(i+1)*m])*m

    return answer