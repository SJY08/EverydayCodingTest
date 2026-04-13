function solution(picks, minerals) {
    var answer = 0;
    let cnt = 0;
    let sort_str= [];
    picks.forEach((ele) => cnt += ele);
    minerals = minerals.slice(0, cnt * 5); // 곡괭이 * 5 이상의 광물 삭제
    
    let str = [];
    minerals.forEach((ele, index) => {
        if (ele === "diamond")
            str.push('a');
        else if (ele === "iron")
            str.push('b');
        else
            str.push('c');
        if (index % 5 === 4 || index == minerals.length - 1) {
            if (str.length !== 5) {
                while(str.length < 5)
                    str.push('d');
            }
            str.sort(); // 묶음 내부를 정렬한 후 string으로 넣기
            let s = '';
            str.forEach((ele) => {
                s += ele;
            })
            sort_str.push(s);
            str = [];            
        }
    })
    sort_str.sort(); // 정렬된 광물 묶음들을 정렬
    
    picks.forEach((pick, idx) => {	// picks 맨 앞, 즉 다이아 곡괭이부터 사용
        while(pick-- && sort_str.length) {
            if (idx == 0) {
                let tmp = sort_str[0];
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i] !== 'd')
                        answer++;
                }
                sort_str.shift();
            } else if (idx == 1) {
                let tmp = sort_str[0];
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i] === 'a') {
                        answer += 5;
                    } else if (tmp[i] != 'd') {
                        answer++;
                    }
                }
                sort_str.shift();
            } else {
                let tmp = sort_str[0];
                for (let i = 0; i < tmp.length; i++) {
                    if (tmp[i] === 'a') {
                        answer += 25;
                    } else if (tmp[i] === 'b') {
                        answer+= 5;
                    } else if (tmp[i] == 'c') {
                        answer++;
                    }
                }
                sort_str.shift();
            }
        }
    })
    return answer;
}