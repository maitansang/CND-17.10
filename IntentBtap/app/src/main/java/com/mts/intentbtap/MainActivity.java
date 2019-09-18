package com.mts.intentbtap;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;

import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;


import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {
    Button btnAdd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnAdd = (Button) findViewById(R.id.btn_add);
        btnAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this,AddMember.class);
                startActivity(intent);
            }
        });
    }

    public void click2(View view) {
        Intent intent = new Intent(MainActivity.this,ViewMember.class);
        startActivity(intent);
    }

    public void click1(View view) {
        Intent intent = new Intent(MainActivity.this,ViewMember.class);
        startActivity(intent);
    }
}