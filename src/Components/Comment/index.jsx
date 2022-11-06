import React, { useState } from "react";
import * as Styles from './style';
import Paging from "../paging"
import axios from "axios";

const Comment = () => {
    const [page, setPage] = useState(1); 
    const [itemsCount] = useState(10);
    const [totalItemsCount] = useState(0);
    const [content,setContent] = useState("");
    
    const writing = async () => {
        if(window.confirm("등록하시겠습니까?")){
            try{
                const data = await axios.post('http://35.216.50.89:8080/addComment',{id,content,type});
                alert(data.data.msg);
            }catch(e){
                alert(e.response.data.msg);
            }

        }

    }

    
    return(
        <>
             <Styles.Comment>
                <Styles.Title>톡톡</Styles.Title>
                <Styles.CommentBox>
                    <Styles.ReviewBox>
                            <Styles.ReImage src="assets/myProfile.png"/>
                            <Styles.RefirstBox>
                                <Styles.ReName>김지수</Styles.ReName>
                                <Styles.ReDate>2022-09-18</Styles.ReDate>
                                <Styles.ReContent>{content}</Styles.ReContent>   
                            </Styles.RefirstBox>
                    </Styles.ReviewBox>
                    <Paging page={page} count={totalItemsCount} setPage={setPage} itemsCount={itemsCount}/>
                    <Styles.InputBox>
                        <Styles.ReviewTextBox>
                            <Styles.ReviewText>리뷰남기기</Styles.ReviewText>
                        </Styles.ReviewTextBox>
                        <Styles.Profile src="assets/myProfile.png"/>
                        <Styles.InputComment placeholder="댓글 입력" onChange={(e) => setContent(e.target.value)}/>
                        <Styles.InputBtn onClick={ writing }>등록</Styles.InputBtn>
                    </Styles.InputBox>
                </Styles.CommentBox>
            </Styles.Comment>
        </>
    )
}

export default Comment;