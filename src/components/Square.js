// import { Component } from "react";
import React from "react";
import './Square.css'

// export class Square extends React.Component {

//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         value: null
//     //     }
//     // }

//     render(){
//         return (
//             <button
//                 className='square'
//                 onClick={()=>{this.props.onClick()}}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

const Square = ({value, onClick}) => {
    return (
        <button
            className='square'
            onClick={()=>{onClick()}}>
            {value}
        </button>
    )
}
export default Square