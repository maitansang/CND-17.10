package com.mts.calculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText mEditA, mEditB;
    private TextView mTvResult;
    private Button btn_plus, btn_sub, btn_mul, btn_div;
    private int a, b;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mEditA = findViewById(R.id.edt_a);
        mEditB = findViewById(R.id.edt_b);
        btn_plus = findViewById(R.id.btn_plus);
        btn_sub = findViewById(R.id.btn_sub);
        btn_mul = findViewById(R.id.btn_mul);
        btn_div = findViewById(R.id.btn_div);
        mTvResult = findViewById(R.id.tv_result);
        btn_plus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result=a+" + "+b+" = "+add(a,b);
                mTvResult.setText(result);
            }
        });

        btn_sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result=a+" - "+b+" = "+sub(a,b);
                mTvResult.setText(result);
            }
        });

        btn_mul.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result=a+" * "+b+" = "+mul(a,b);
                mTvResult.setText(result);
            }
        });

        btn_div.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a=getContentA();
                b= getContentB();
                String result;
                    result= a + " / " +b+" = "+div(a,b);
                mTvResult.setText(result);
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
}
