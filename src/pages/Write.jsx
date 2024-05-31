import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {

  const [value, setValue] = useState('');


  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>publish</h1>
          <span>
            <b> status:</b>  draft
          </span>
          <span>
            <b> visibility: </b> public
          </span>
          <input style={{display:'none'}} type="file" id="file" />
          <label htmlFor="file" className="file">upload file</label>
          <div className="buttons">
            <button>save as draft</button>
            <button>update</button>
          </div>
        </div>
        <div className="item">
          <h1>category</h1>
          <div className="category">
              <input type="radio" value="art" id="art" />
              <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input type="radio" value="science" id="science" />
            <label htmlFor="art">Science</label>
          </div>
          <div className="category">
            <input type="radio" value="technology" id="technology" />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="category">
            <input type="radio" value="cinema" id="cinema" />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="category">
            <input type="radio" value="design" id="design" />
            <label htmlFor="design">design</label>
          </div>
          <div className="category">
            <input type="radio" value="food" id="food" />
            <label htmlFor="food">food</label>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Write
