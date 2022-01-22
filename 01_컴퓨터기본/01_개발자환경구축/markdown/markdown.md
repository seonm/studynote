# markdown
## 목차

- [01. 정의](#01-정의)
- [02. 문법](#02-문법)
  - [Header](#1-header)
  - [BlockQuote](#2-blockquote-블럭인용문)
  - [List](#3-list)
  - [Code](#4-source-code-소스-코드)
  - [Line](#5-line)
  - [Link](#6-link)
  - [Text Decoration](#7-text-decoration)
  - [Img](#8-image)
  - [줄변경, 문단변경](#9-줄변경-문단변경)
  - [Table](#10-table)
- [03. 확장팩](#03-확장팩)

---

## 01. 정의
- 2004년 존그루버가 만든 HTML변환 가능한 텍스트기반의 마크업 언어  
- 특수기호, 문자 이용한 간단한 구조의 문법, 웹에서 빠르게 컨텐츠 작성
- Github README.md

## 02. 문법
### 1. Header 
`#` 의 갯수로1 ~ 6개 까지 단계 조절 가능
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### 2. BlockQuote 블럭인용문
 `>`   

> 세로줄생성 but 2개 이상은 그냥 > 표기  
> - 다른 마크다운 문법 작성 가능

### 3. List
`1, -, *, +`   

1. 순서있는 목록
    1. 순서있는 목록
       1. 여기서부턴 a로 통일됨
- 순서없는 목록
  * 특수문자 혼용 가능
    + 정해진 특수문자 순서로 노출됨

### 4. 소스 코드
- `' ``` ' 사용언어`  백틱기호 3개 + 사용언어 선언으로 문법 강조 가능
 
   ```javascript
    console.log('Hello World')
    ``` 

- `<pre><code></code></pre>`
- `Tab` 들여쓰기 

### 5. `line` 
***
- *** `*` 3개 이상 띄어쓰기 상관없음  
- --- `-` 3개 이상 띄어쓰기 상관없음

### 6. Link
기본사용 : `[Title](Link)`   
이미지링크 : `[![Alt](./img Address "Option Title")](Link)`

#### 링크 작성시 주의점  
    영문 대문자 > 소문자  
    띄어쓰기 > -  
    특문,기호 > 제거

### 7. Text Decoration
*em* > `*Text*` `_Text_`  
**b** > `**Text**` `__Text__`    
~~line-through~~ > `~~Text~~`

### 8. Image  
`![Alt](./img Address "Option Title")`  
사이즈 조절은 css로 작성해야한다.


### 9. 줄변경, 문단변경
- 줄변경 : 문장 마지막에서 3칸이상 띄어쓰기
- 문단변경 : return 2회

### 10. Table

```markdown
|th|header|
|---|---|
|text|text|
```
|table|header|
|---|---|
|text|text|


```markdown
|table|header||
|---:|:---|:---:|
|right|left|center|
```
|table|header||
|---:|:---|:---:|
|right|left|빈칸|


## 03. 확장팩
- markdown All in One
- markdown Preview Github Styling