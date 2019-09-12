package com.mts.calculation3way;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.mts.calculation3way.R;

public class MainActivity extends AppCompatActivity
implements View.OnClickListener {
    private EditText mEditA, mEditB;
    private TextView mTvResult;
    private Button btn_plus, btn_sub, btn_mul, btn_div;
    private int a, b;
    // plus  : cách 1
    // sub   : cách 2
    // mul   : cách 3


    // cách 1: onClick XML
    public void btn_plus(View v){
        a=getContentA();
        b=getContentB();
        String result = a+" + "+b+ " = "+add(a,b);
        mTvResult.setText("cách 1 onClick XML:" + result);
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mEditA = findViewById(R.id.edt_a);
        mEditB = findViewById(R.id.edt_b);
        btn_plus = findViewById(R.id.btn_plus);
        btn_sub = findViewById(R.id.btn_sub);

        btn_mul = findViewById(R.id.btn_mul);
        btn_mul.setOnClickListener(this);

        btn_div = findViewById(R.id.btn_div);
        mTvResult = findViewById(R.id.tv_result);

        // cách 2: Anonymous listener
        btn_sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result=a+" - "+b+" = "+sub(a,b);
                mTvResult.setText("cách 2:  Anonymous listener "+result);
            }
        });

        // cách 2: Anonymous listener
        btn_div.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result;
                result= a + " / " +b+" = "+div(a,b);
                mTvResult.setText("cách 2: Anonymous listener "+result);
            }
        });
    }

    int add(int a, int b) {
        return a + b;
    }


    int sub(int a, int b) {
        return a - b;
    }

    int mul(int a, int b) {
        return a * b;
    }

    float div(int a, int b) {
        return (float) a / b;
    }

    int getContentA() {
        return Integer.parseInt(mEditA.getText().toString());
    }

    int getContentB() {
        return Integer.parseInt(mEditB.getText().toString());
    }


    //cách 2: Activity is listener
    @Override
    public void onClick(View view) {
        a=getContentA();
        b=getContentB();
        String result = a+" * "+b+ " = "+mul(a,b);
        mTvResult.setText("cách 3: Activity is listener "+ result);
    }
}
