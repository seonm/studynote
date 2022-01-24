# SSH

## ssh란

Secure Shell의 줄임말로 두컴퓨터간 통신을 할 수 있게 해주는 하나의 protocol.

    # Shell 이란?
    터미널에 탑제된 명령어 해석기

    # protocol이란?
    서로 다른 통신 장비 간 주고 받는 데이터의 양식과 규칙
    ex. http, https, ftp

### ssh 참고자료

- [https://medium.com/@jamessoun93/ssh란-무엇인가요-87b58c521d6f](https://medium.com/@jamessoun93/ssh%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-87b58c521d6f)
- [https://rxdcxdrnine.tistory.com/m/13](https://rxdcxdrnine.tistory.com/m/13)

## ssh-keygen 입력시 생성되는 파일

- id_rsa 개인키
- id_rsa.pub pub(public)공개키
- 내컴퓨터에 개인키 파일이 정해진 폴더(사용자 홈 디렉토리/.ssh)에위치하고 시스템에 내 개인키와 쌍을 이루는 공개키가 등록되어있다면 이 두파일이 일치할 경우 사용자 인증이 이루어진다.