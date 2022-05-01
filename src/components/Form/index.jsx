import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { AddContact,getContact,EditContact,updateContact } from '../../actions/ContactAction';
import shortid from "shortid";
import { useForm } from '../../Hooks/useForm';



const Form = () => {


  let history = useHistory();
  const dispatch = useDispatch()


    const [Email, setEmail] = useState('');
    const [number, setnumber] = useState('');
    const [updateid,setUpdateId] = useState('');
    const [update,setUpdate] = useState(false);

    const {handleChange} = useForm ();

    //Edit Selector
    const getEditSelector = useSelector((state) => state.contacts)
    // console.log("getEditSelector",getEditSelector);
    
    useEffect(() => {
      if (getEditSelector) {
        // setUpdate(true);
        setUpdateId(getEditSelector.contacts.id);
        setEmail(getEditSelector.contacts.Email)
        setnumber(getEditSelector.contacts.Number)
  
      }
    }, [getEditSelector]);
      
    const submithandler = (e) => {
      // e.preventDefault();
      // console.log("length",updateid.length);
      console.log("getEditSelector",getEditSelector);
      console.log("Update : ",update);
      const formdata = {
        id: shortid.generate(),
        Email: Email,
        Number: number
      }
      // console.log("Update :",update);
    //   if (updateid.length>0) {  
    //     console.log("My ID",updateid);
    //     const formdata = {
    //       id: updateid,
    //       Email: Email,
    //       Number: number
    //     }
    //     dispatch(updateContact(formdata));
    //     history.push("/ShowContact");
    //   }
    // else{        
      dispatch(getContact(""));
      dispatch(AddContact(formdata));
      console.log("formdata" + JSON.stringify(formdata));
      history.push("/ShowContact");
    // }
    };


  return (
    <div className="container-fluid ">
      <h1 className="text-center text-dark py-3 display-2" style={{ fontSize: 40, fontWeight: "bold" }}>Contact Form</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form >
            <div className="form-group">
              <input
                className="form-control my-2"
                name='email'
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name='phone'
                type="text"
                placeholder="Phone"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                // onChange={handleChange}
              />
            </div>
            <div className="form-group my-3">
              <button
                type="submit"
                onClick={submithandler}
                className="btn btn-block btn-dark"
              >
                {getEditSelector.contacts.id ? "Update Contact" : "Add Contact"}
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Form