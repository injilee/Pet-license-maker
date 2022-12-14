# Pet License Maker
반려동물등록증을 모바일로 만들 수 있도록 제작한 서비스입니다.

<strong>개발 기간</strong> 📆<br/>
2022.11.02 ~ 2022.12.11

<br/>

## 1. 컴포넌트 설계

### 폴더 구조
<pre>
<code>
src/
  common/
     - colors
     - size
     
  components/
     - [button]
     - [card]
     - [edit]
     - [edit_add_form]
     - [edit_form]
     - [footer]
     - [header]
     - [maker]
     - [imageFileInput]
     - [login]
        - login
        - email_login
          
  service/
    - auth_service
    - card_repository
    - email_service
    - firebse
    - image_uploader
</code>
</pre>

### API 설계
| API      | url                        | part                    | result                  |
| -------- | -------------------------- | ----------------------- | ----------------------- |
| upload   | cloud_name<br/>preset_name | snippet                 | 이미지 업로드            |
| delete   | cloud_name<br/>public_id   | snippet&<br/>statistics | 업로드한 카드 이미지 삭제 |

<br/>

### Database 구조

<br/>

## 2. 구현기능
- [x] Google, Github 계정 로그인 지원
- [x] Firebase Realtime으로 database 실시간 반영
- [x] 이미지 업로드 기능
- [x] 제작한 카드를 이미지로 저장 가능
- [x] 반응형 디자인

<br/>

## 3. 문제해결
### 1. 

### 2. Cloudinary api
- upload
```javascript
async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', this.preset_name);

    const result = await axios.post(
      `https://api.cloudinary.com/v1_1/${this.cloud_name}/image/upload`,
      data,
    );
    return result;
  }
```
<code>upload</code>의 인자로 이미지 파일을 교체할 카드의 정보를 받아온다.
Cloudinary에 이미지를 업로드 하면 결과값을 return 받는데,
필요한 정보인 <code>name, url, public_id</code>를 오브젝트 형태로 저장해둔다.
<code?public_id</code>는 delete api의 인자로 사용할 것이다.

- delete
```javascript
async delete(public_id) {
    const myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic NjUxM***',
    );

    const formdata = new FormData();
    formdata.append('public_ids[]', public_id);

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      `cloudinary/v1_1/${this.cloud_name}/resources/image/upload/`,
      requestOptions,
    ).catch((error) => console.log('error', error));
  }
```
제작한 카드 삭제 시, 카드에 등록된 이미지 또한 함께 삭제하는 함수다.
카드의 <code>id</code>를 이용해 해당하는 카드와 카드에 등록된 이미지를 삭제하여 Cloudinary의 저장공간을 확보할 수 있다.


### 3. 컴포넌트를 이미지로 저장
사용자가 만든 카드 컴포넌트를 이미지로 저장할 수 있게 <code>dom to image</code>와 <code>file saver</code>로 구현했다.

```javascript
  const downloadCard = () => {
    const card = cardRef.current;

    domtoimage
      .toBlob(card)
      .then((blob) => saveAs(blob, `${name}_card.png`));
  };
  
  return (
    <div className={styles.card} ref={cardRef}>
        ...
    </div>
);
```
이미지로 변환할 컴포넌트에 포함되지 않았으면 하는 버튼이 있어 <code>filter</code>를 <code>option</code>에 추가해줬다.

```javascript
  const downloadCard = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== 'BUTTON';
    };

    domtoimage
      .toBlob(card, { filter: filter })
      .then((blob) => saveAs(blob, `${name}_card.png`));
  };
```

### 4. Netlify Deploy Faild
build 후에 <code>netlify deploy</code> 를 했으나 <code>"build.command" faild</code> 에러가 발생했다.
<pre>
<code>Cannot find file './app.css' in ...</code>
</pre>
github에 올라간 <code>App.css</code> 파일명이 대문자로 되어 있었다. 
파일명을 <code>app.css</code> 소문자로 변경해줘야 한다.
<br/>

## 4. Preview

- Desktop 🖥

<br/>

- Mobile 📱

---

## 5. Demo Link
https://majestic-basbousa-dce7c6.netlify.app/

<br/>

## Tech Stack

- [x] HTML
- [x] css
- [x] JavaScript
- [x] React Hooks
- [x] React Router
- [x] Firebase (Authentication, Realtime Database)
- [x] Cloudinary (upload, delete)
- [x] Google OAuth
- [x] dom to image
- [x] file saver
- [x] postCSS
- [x] Postman 

## Reference

[Dream Coding](https://academy.dream-coding.com/)<br/>
[React Router](https://reactrouter.com/en/main)<br/>
[Firebase](https://firebase.google.com/docs?authuser=0)
[Cloudinary](https://cloudinary.com/)

## Tech Blog

[Pet License Maker :: How make?](https://blog.naver.com/lij8016/222910703626)
