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

| API    | url                        | part                    | result                    |
| ------ | -------------------------- | ----------------------- | ------------------------- |
| upload | cloud_name<br/>preset_name | snippet                 | 이미지 업로드             |
| delete | cloud_name<br/>public_id   | snippet&<br/>statistics | 업로드한 카드 이미지 삭제 |

<br/>

### Database 구조

이전 database

```
users
  + cardId
    + id : {},
    + name : {},
    + petNumber : {},
    + birth : {},
    + gender : {},
    + address : {},
    + featurs : {},
    + guardian1 : {},
    + guardianPhoneNum1 : {},
    + guardian2 : {},
    + guardianPhoneNum2 : {},
    + fileName : {},
    + fileUrl : {},
```

이후 database

```
users
  + cardId
    + id : {},
      + pet : {
        + name : {},
        + petNumber : {},
        + birth : {},
        + gender : {},
        + address : {},
        + featurs : {},
      }
      + guardians : {
        + guardian1 : {},
        + guardianPhoneNum1 : {},
        + guardian2 : {},
        + guardianPhoneNum2 : {},
      }
      + image : {
        + fileName : {},
        + fileUrl : {},
      }
```

<br/>

### 정규표현식을 사용하여 Javascript의 Email & Password 검증

| Email                                         | Password                                         |
| --------------------------------------------- | ------------------------------------------------ |
| (randomString)@(randomString).(2-3 chracters) | (randomString)(randomNumber)(@$!#%&\*){8자 이상} |

```javascript
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!#%&*])[A-Za-z\d@$!#%&*]{8,}$/;
```

<br/>

## 2. 구현기능

- [x] Google, Github 계정 로그인 지원
- [x] Firebase Realtime으로 database 실시간 반영
- [x] 이미지 업로드 기능
- [x] 제작한 카드를 이미지로 저장 가능
- [x] 반응형 디자인

<br/>

## 3. 문제해결

### 1. Cloudinary api

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
<code>public_id</code>는 delete api의 인자로 사용할 것이다.

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

### 2. 컴포넌트를 이미지로 저장

사용자가 만든 카드 컴포넌트를 이미지로 저장할 수 있게 <code>dom to image</code>와 <code>file saver</code>로 구현했다.

```javascript
const downloadCard = () => {
  const card = cardRef.current;

  domtoimage.toBlob(card).then((blob) => saveAs(blob, `${name}_card.png`));
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

### 3. Netlify Deploy Faild

build 후에 <code>netlify deploy</code> 를 했으나 <code>"build.command" faild</code> 에러가 발생했다.

<pre>
<code>Cannot find file './app.css' in ...</code>
</pre>

github에 올라간 <code>App.css</code> 파일명이 대문자로 되어 있었다.
파일명을 <code>app.css</code> 소문자로 변경해줘야 한다.

<br/>

## 4. Preview

Desktop 🖥

- login page
  <img src="https://user-images.githubusercontent.com/90603357/207564043-2ce38ca4-abcd-43c4-8bce-ce6b2c2974f9.png" alt="login page desktop screenshot" style="width:100%;"/>

- maker page
  <img src="https://user-images.githubusercontent.com/90603357/207564212-e2051d93-100d-4bf7-9712-6b1f5d088d68.png" alt="maker page desktop screenshot" style="width:100%;"/>

<br/>

Mobile 📱

- login page
  <img src="https://user-images.githubusercontent.com/90603357/209548671-ab4311d7-81a0-407a-8d99-6de497b6d658.png" alt="login page mobile screenshot" style="width:80%;"/>

- maker page
  <img src="https://user-images.githubusercontent.com/90603357/209548712-1044e406-5aaa-4bca-971f-c6150fd852b3.png" alt="maker page mobile screenshot" style="width:80%;"/>

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
[Firebase 데이터베이스 구조화](https://firebase.google.com/docs/database/web/structure-data)
[Cloudinary](https://cloudinary.com/)

## Tech Blog

[Pet License Maker :: What I Learned](https://blog.naver.com/lij8016/222910703626)
