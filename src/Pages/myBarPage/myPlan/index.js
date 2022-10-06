import React from 'react';
import * as Styles from './style';
import MyPage from '../../myPage'; 
import { MarginTopWrapper } from "../../../Common/style";

const MyPlan = () => {
  return (
    <>
    <MyPage />
    <MarginTopWrapper>
      <Styles.BigBox>
          <Styles.Box>
            <Styles.Text>나의 플랜</Styles.Text>
          </Styles.Box>
          <Styles.SmallBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.contentBox>
                <Styles.contentBox2>
                  <Styles.contentText>응가의 경북 여행</Styles.contentText>
                  <Styles.dayBox>1995-05-09 ~ 2022-10-05</Styles.dayBox>
                </Styles.contentBox2>
                <Styles.contentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.contentBox2>
              </Styles.contentBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.contentBox>
                <Styles.contentBox2>
                  <Styles.contentText>응가의 경북 여행</Styles.contentText>
                  <Styles.dayBox>1995-05-09 ~ 2022-10-05</Styles.dayBox>
                </Styles.contentBox2>
                <Styles.contentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.contentBox2>
              </Styles.contentBox>
            </Styles.lineBox>
            <Styles.lineBox>
              <Styles.ImgBox src={`assets/image32.png`}/>
              <Styles.contentBox>
                <Styles.contentBox2>
                  <Styles.contentText>응가의 경북 여행</Styles.contentText>
                  <Styles.dayBox>1995-05-09 ~ 2022-10-05</Styles.dayBox>
                </Styles.contentBox2>
                <Styles.contentBox2>
                  <Styles.ModifyDeleteBox>일정 수정</Styles.ModifyDeleteBox>
                  <Styles.ModifyDeleteBox>일정 삭제</Styles.ModifyDeleteBox>
                  <Styles.NameBox>석준혁</Styles.NameBox>
                </Styles.contentBox2>
              </Styles.contentBox>
            </Styles.lineBox>
          </Styles.SmallBox>
          <Styles.PageText>&lt;&nbsp; 1 &nbsp;&nbsp; 2 &nbsp;&nbsp; 3 &nbsp;&nbsp; 4 &nbsp; &gt;</Styles.PageText>
        </Styles.BigBox>
    </MarginTopWrapper>
      
    </>
  );
};
  
export default MyPlan;