import React from "react";
import {Link} from "react-router-dom";
import '../member/Ahn.css'


const Member_home = () => (
    <span>
        <table border={1} >
            <thead>
                <tr>
                    <th> 학번 </th> <th>이름</th>
                </tr>
            </thead>
            <tr>
                <td><Link to ="/Ahn">202021224</Link></td> <td>안승현</td>
            </tr>
            <tr>
                <td><Link to ="/Iim">123456</Link></td> <td>임효진</td>
            </tr>
            <tr>
                <td><Link to ="/Kim">456789</Link></td> <td>김동건</td>
            </tr>
        </table>
    </span>

)

export default Member_home;