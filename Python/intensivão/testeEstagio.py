


#a = int(10)

#if a >=10:
 #   a = 11
#elif a > 10:
 #   a=5
#print(a + 10)


def fizzBuzz(n):
    n = int(15)
    for i in range(1, n + 1):
        if ((i % 3 == 0) and (i % 5 == 0)):
            print("FizzBuzz")
        elif (i % 3 == 0):
            print("Fizz")
        elif (i % 5 == 0):
            print("Buzz")
        else:
            print(i)

if __name__ == '__main__':
    n = int(input().strip())

    fizzBuzz(n)