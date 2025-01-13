N = int(input())
word = list(input())
word_len = len(word)

for i in range(N-1) :
    word1 = list(input())
    for j in range(word_len) :
        if word[j] != word1[j] : word[j] = "?"
            
print("".join(word))