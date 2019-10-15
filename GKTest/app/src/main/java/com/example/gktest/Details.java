package com.example.gktest;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.TextView;

import com.example.gktest.model.Member;

public class Details extends AppCompatActivity {
    Member member;
    TextView tvname, tvage,tvaddress;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_details);
        Intent intent = getIntent();
        member = (Member) intent.getSerializableExtra("member");



        tvname = (TextView) findViewById(R.id.tvname);
        tvage= (TextView) findViewById(R.id.tvage);
        tvaddress= (TextView) findViewById(R.id.tvaddress);


        tvname.setText(member.getName());
        tvage.setText(member.getAge());
        tvaddress.setText(member.getAddress());
    }
}
