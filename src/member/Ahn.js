import React from "react";
import './Ahn.css';
import {Link} from "react-router-dom";

const Member_home = () => (
    <div>
        <div id="divViewForm">
                <table border="1">
                    <tbody>
                    <tr>
                        <th scope="row">학번</th>
                        <td>202021224</td>
                    </tr>
                    <tr>
                        <th scope="row">이름</th>
                        <td>안승현</td>
                    </tr>
                    <tr>
                        <th scope="row">아이디</th>
                        <td>shhb1022</td>
                    </tr>
                    <tr>
                        <th scope="row">학년</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">학기</th>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">전화번호</th>
                        <td>01049055061</td>
                    </tr>
                    <tr>
                        <th scope="row">이메일</th>
                        <td>shhb1022@naver.com</td>
                    </tr>
                    <tr>
                        <th scope="row">도서대출</th>
                        <td><Link to ="/library">X</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">회비납부</th>
                        <td>
                            <select id="level">
                                <option>O</option>
                                <option>X</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">회원등급</th>
                        <td>
                            <select id="level">
                                <option>정회원</option>
                                <option>준회원</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
)
export default Member_home;
