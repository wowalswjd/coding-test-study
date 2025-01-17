def solution(answers):
    one=[1,2,3,4,5]
    two=[2,1,2,3,2,4,2,5]
    three=[3,3,1,1,2,2,4,4,5,5]
    count = [0,0,0]
    
    for idx in range(len(answers)):
        if one[idx%len(one)] == answers[idx]:
            count[0]+=1
        if two[idx%len(two)] == answers[idx]:
            count[1]+=1
        if three[idx%len(three)] == answers[idx]:
            count[2]+=1
        
    return [i+1 for i in range(len(count)) if count[i] == max(count) ]