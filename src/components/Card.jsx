import React from 'react'

export const card = (props) => {
  const user=[
  {
    "name": "Narendar Modi",
     "image": "https://bjpbengal.org/wp-content/uploads/2020/12/unnamed.jpg",
    "email": "Modi.com",
    "age": 25,
    "profession": "Full-Stack Developer"
  },
  {
    "name": "Nawaz sharif",
    "image": "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1616836458809.jpg-org",
    "email": "sharif.com",
    "age": 28,
    "profession": "Fashion Designer"
  },
  {
    "name": "Priyanka Gandhi",
    "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/priyanka_gandhi_1200x768.jpeg?size=1200:675",
    "email": "Priyanka.com",
    "age": 30,
    "profession": "Digital Marketer"
  },
  {
    "name": "Donald Trump",
    "image": "https://www.motherjones.com/wp-content/uploads/donald_trump.jpg?w=990",
    "email": "Donald.com",
    "age": 26,
    "profession": "UI/UX Designer"
  },
  {"name": "Amit Shah",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcduMUlOHh0XuvlO-wkW4S6NjC1rFW0lMn-A&s",
    "email": "amit.com",
    "age": 43,
    "profession": "MERN Stack Developer"},

    {"name": "Rahul Gandhi",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJvHpTUdZqrNxEx2td1mCnA-0bMefwJKMEs0B7bSi_T50hXWuWZeGZRUPhSt77N3i2RQ&usqp=CAU",
    "email": "Rahul.com",
    "age": 26,
    "profession": "Devops Engineer"},

    {"name": "Arvind kejriwal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11uGt5pel9631bpJsV8goMxpDtOGaCgSeTDhs2xto_6FDuw9pPpNV9OAoJENtXKHfdvo&usqp=CAU",
    "email": "Kejriwal.com",
    "age": 38,
    "profession": "Cloud Engineer"},

    {"name": "Sharukh khan",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F4vVCpc4E035mGV8Ab_whsKPviRfVShAgwEgVCqNXWu3PlPUK0p1bXJway8giifYiV4&usqp=CAU",
    "email": "SRK.com",
    "age": 57,
    "profession": "Seo Specialist"},
]
// user.map(function(user){
//   console.log(user.name, user.age, user.email, user.profession, user.image)
// })

  return (
  <>
  <div>
      <div className='flex flex-wrap justify-center gap-4 mt-10 mb-80 h-64'>
        {user.map((elem, index) => (
          <div key={index} className='h-full w-80 text-xl bg-amber-500 flex-wrap text-center justify-center text-black p-3 hover:bg-amber-300'>
            <img src={elem.image} alt={elem.name} className='h-20 w-28 rounded-full mx-auto mb-3' />
            <p>{elem.name} ({elem.age})</p>
            <p>{elem.email}</p>
            <p>{elem.profession}</p>
          </div>
        ))}
      </div>
      </div>
 </>
  )
}

export default card;