package com.mts.calculator;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;



public class MainActivity extends AppCompatActivity {
    EditText editTextA, editTextB;
    TextView textView;
    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editTextA = (EditText) findViewById(R.id.edt_a);
        editTextB = (EditText) findViewById(R.id.edt_b);
        textView = (TextView) findViewById(R.id.tv_result);
        button = (Button) findViewById(R.id.result);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int so1 = Integer.parseInt(editTextA.getText().toString());

                int so2 = Integer.parseInt(editTextB.getText().toString());
                textView.setText(String.valueOf(so1 + so2));
            }
        });
    }

    int add(int a, int b) {
        return a + b;
    }

}
