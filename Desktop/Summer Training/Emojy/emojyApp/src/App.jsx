//سطر ١٠٥ البداية
// import './App.css'
// import { useEffect,useState } from 'react';
// // import { CiSearch } from "react-icons/ci";

// // useState: manage state within a component, allow to store and update data.
// // useEffect: to perform side effects in a component, such as updating the document title, fetching
// function App() {
//   let[data,setdata] = useState([])
//   useEffect(()=>{
//     fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//     // console.log("fetch")
//     .then(response=>response.json())
//     .then(response=>setdata(response))
//   },[]);

//   return (
//     <div className="App">
//       <div className="emo">
//         <div className="emoji_text">
//       <span>Emoji Search 🦄</span>
//       <p>A simple Emoji search tool made with ReactJS</p>
//       {/* to add the search lable used to 
//       reserve space for content that soon will appear in a layout.
//       Placeholders can include PlaceholderParagraph*/}
//       <div> <input type = "text"  placeholder = 'Search for a keyword' />
//       <button className='searchbtn'>Search</button></div>

//       {/* <input type = "text"  placeholder = 'Search for a keyword' />
//       <button className='searchbtn'>Search</button> */}
// {/* ________________________________________________________________________________________________________________________________ */}
//       </div></div>
//       <div className="container"> 
//         {
//         data.map((e) => 
//           <div className="emoji_card">
//           <p className='emoji'>{e.character}</p>
//           {/* <p className='name'>{i.unicodeName}</p> */}
         
//         </div>
//           ) 
//           }
//       </div>
//     </div>
//   );
// }

// export default App

//شغال
// import './App.css'
// import { useEffect,useState } from 'react';
// // import { CiSearch } from "react-icons/ci";

// // useState: manage state within a component, allow to store and update data.
// // useEffect: to perform side effects in a component, such as updating the document title, fetching
// function App() {
//   let[data,setdata] = useState([])
//   let[search, setSearch] = useState(' . ')
//   useEffect(()=>{
//     fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//     // console.log("fetch")
//     .then(response=>response.json())
//     .then(response=>setdata(response))
//   },[]);
//   let handelSearch = (e)=>{
//     setSearch(e.target.value)
//   }
//   let handelSubmit = ()=>{
//     if(search!==''){
//       fetch('https://emoji-api.com/emojis?search=computer&access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//     console.log("fetch")
//     .then(response=>response.json())
//     .then(response=>setdata(response))
//     }
//   }
//   return (
//     <div className="App">
//       <div className="emo">
//         <div className="emoji_text">
//       <span>Emoji Search 🦄</span>
//       <p>A simple Emoji search tool made with ReactJS</p>
//       {/* to add the search lable used to 
//       reserve space for content that soon will appear in a layout.
//       Placeholders can include PlaceholderParagraph*/}
//       <div><input type = "text"  placeholder = 'Search for a keyword' value= {search} onChange={(e)=>handelSearch(e)} />
//       <button className='searchbtn' onClick={()=>handelSubmit}>Search</button>
//       </div>
// {/* ________________________________________________________________________________________________________________________________ */}
//       </div></div>
//       <div className="container"> 
//         {
//         data.map((e) => 
//           <div className="emoji_card" key={e.slug}>
//             <p className='emoji'>{e.character}</p>
//             <p className='char'>{e.unicodeName}</p>
//         </div>
//           ) 
//           }
//       </div>
//     </div>
//   );
// }

// export default App
//==============================================================================================================
// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//       .then(response => response.json())
//       .then(response => setData(response));
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (search !== '') {
//       //fetch('https://emoji-api.com/categories?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//       fetch(`https://emoji-api.com/emojis?search=${search}&access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781`)
//         .then(response => response.json())
//         .then(response => {
//           if(response){
//           setData(response);
//         }
        
//       }
      
//       )
//     }
//   }

//   return (
//     <div className="App">
//       <div className="emo">
//         <div className="emoji_text">
//           <span>Emoji Search 🦄</span>
//           <p>A simple Emoji search tool made with ReactJS</p>
//           <div>
//             <input
//               type="text"
//               placeholder="Search for a keyword"
//               value={search}
//               onChange={handleSearch}
//             />
//             <button className="searchbtn" onClick={handleSubmit}>Search</button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         {data.map((e) => (
//           <div className="emoji_card" key={e.slug}>
//             <p className="emoji">{e.character}</p>
//             {/* <p className="char">{e.unicodeName}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
//==============================================================================================================






// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//       .then(response => response.json())
//       .then(response => setData(response))
//       .catch(error => setError('An error occurred while fetching emojis.'));
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (search !== '') {
//       fetch(`https://emoji-api.com/emojis?search=${search}&access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781`)
//         .then(response => response.json())
//         .then(response => {
//           if (response.length === 0) {
//             setError('No emojis found for the search term.');
//           } else {
//             setData(response);
//             setError('');
//           }
//         })
//         .catch(error => setError('An error occurred while fetching emojis.'));
//     }
//   };

//   return (
//     <div className="App">
//       <div className="emo">
//         <div className="emoji_text">
//           <span>Emoji Search 🦄</span>
//           <p>A simple Emoji search tool made with ReactJS</p>
//           <div>
//             <input
//               type="text"
//               placeholder="Search for a keyword"
//               value={search}
//               onChange={handleSearch}
//             />
//             <button className="searchbtn" onClick={handleSubmit}>Search</button>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         {error !== '' ? (
//           <p className="error">{error}</p>
//         ) : (
//           data.map((e) => (
//             <div className="emoji_card" key={e.slug}>
//               <p className="emoji">{e.character}</p>
//               <p className="char">{e.unicodeName}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');
//   const [isNightMode, setIsNightMode] = useState(false);

//   useEffect(() => {
//     fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
//       .then(response => response.json())
//       .then(response => setData(response));
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (search !== '') {
//       fetch(`https://emoji-api.com/emojis?search=${search}&access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781`)
//         .then(response => response.json())
//         .then(response => {
//           if (response) {
//             setData(response);
//           }
//         });
//     }
//   };

//   const handleToggleMode = () => {
//     setIsNightMode(!isNightMode);
//   };

//   return (
//     <div className={`App ${isNightMode ? 'night-mode' : 'light-mode'}`}>
//       <div className="emo">
//         <div className="emoji_text">
//           <span>Emoji Search 🦄</span>
//           <p>A simple Emoji search tool made with ReactJS</p>
//           <div>
//             <input
//               type="text"
//               placeholder="Search for a keyword"
//               value={search}
//               onChange={handleSearch}
//             />
//             <button className="searchbtn" onClick={handleSubmit}>
//               Search
//             </button>
//           </div>
//         </div>
//         <button className="mode-toggle" onClick={handleToggleMode}>
//           {isNightMode ? 'Light Mode' : 'Night Mode'}
//         </button>
//       </div>
//       <div className="container">
//         {data.map((e) => (
//           <div className="emoji_card" key={e.slug}>
//             <p className="emoji">{e.character}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useEffect, useState } from 'react';
import './App.css';
// useState: manage state within a component, allow to store and update data.
// useEffect: to perform side effects in a component, such as updating the document title, fetching

function App() {
  //3 state variables are declared using the useState hook
  //1- data is initialized as an empty array and will be used to store the fetched data from an API.
  const [data, setData] = useState([]); //fetch data
  //2-search is initialized as an empty string and will be used to store the user's search input.
  const [search, setSearch] = useState('');//fetch the user search data
  //LODDING
  const[isPending,setIsPending] = useState(true);
  useEffect(() => {
    fetch('https://emoji-api.com/emojis?access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781')
    //.then method to handle the response. 
      .then(response => response.json()) //first: callback extracts the JSON data from the response using the response.json() method.
      .then(response => {
        setData(response)
        setIsPending(false);}); //second: callback is executed with the parsed JSON data, and it updates the data state variable using the setData function obtained from the useState hook.
      //حيصير فيه re-render
  }, []);
//handle changes in the search input. e as a parameter and update the state with the input value 
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search !== '') {
      fetch(`https://emoji-api.com/emojis?search=${search}&access_key=a964e609f3dd8a50a9ef6b6c1e58b947ed56c781`)
        .then(response => response.json())
        .then(response => {
          //if statement is used to check if the search state variable is not empty. This condition ensures that the search is performed only when the user has entered a value to search for.
          if (response.length > 0) {
            setData(response);
          } else {
            // Handle case when no results are found
            setData([]);
            console.log('No results found');
            // const m = document.getElementById("MM");
            // m.innerHTML ="No results found";
            alert("No results found");
            
          }
        })
        .catch(error => {
          // Handle fetch error
          console.error('error:', error);
        });
    }
  };

  return (
    <div className="App">
      <div className="emo">
        <div className="emoji_text">
          <span>Emoji Search 🦄</span>
          <p>A simple Emoji search tool made with ReactJS</p>
          {isPending && <div className='load'> Lodding⌛</div>}
          <div>
            <input
              type="text"
              // to add the search lable used to reserve space for content that soon will appear in a layout.Placeholders can include PlaceholderParagraph
              placeholder="Search for a keyword"
              value={search}
              onChange={handleSearch}
            />
            <button className="searchbtn" onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
      <div className="container">
        {data.map((e) => (
          <div className="emoji_card" key={e.slug}>
            <p className="emoji">{e.character}</p>
            {/* <p className="char">{e.unicodeName}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;