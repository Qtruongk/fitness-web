import React from 'react';
import './More.css';
import BMIForm from '../components/BMIForm';

const More = () => {
  return (
    <div className="container">
      <div className="title">
        <p>Tính chỉ số BMI</p>
      </div>
      <div className="content">
        <p>
          Chỉ số BMI được các bác sĩ và các chuyên gia y tế sử dụng từ nhiều năm nay để xác định tình trạng cơ thể của một
          người nào đó có bị béo phì, thừa cân hay không, điều này rất quan trọng vì nó giúp chúng ta tầm soát các yếu tố
          như: mỡ máu, gan nhiễm mỡ, viêm khớp xương mãn tính, tự kỷ, trầm cảm,…
          BMI không đo lường trực tiếp mỡ của cơ thể nhưng các nghiên cứu đã chứng minh rằng BMI tương quan với đo mỡ
          trực tiếp. Chỉ số BMI có thể giúp xác định một người bị bệnh béo phì, thừa cân hay bị bệnh suy dinh dưỡng. Chỉ
          số BMI được sử dụng từ nhiều năm nay để đánh giá các nguy cơ sức khỏe liên quan đến cân nặng.
        </p>
        <div className="img-BMI">
          <img
            src="https://thangdangblog.com/wp-content/uploads/2021/09/Tinh-chi-so-BMI.png"
            alt="BMI Chart"
            className="bmi-image"
          />
        </div>
      </div>
      <BMIForm />
    </div>
  );
};

export default More;
