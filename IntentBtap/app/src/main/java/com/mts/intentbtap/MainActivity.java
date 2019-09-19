package com.mts.intentbtap;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;

import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;

import android.widget.ListView;
import android.widget.Toast;


import androidx.appcompat.app.AppCompatActivity;


import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {
    //----------
    Member memberSang = new Member("Mai Tấn Sang","0905843252");
    Member memberSon= new Member("Mai Tấn Sơn","0905102080");
    Member members[] = new Member[]{memberSang,memberSon};

    //---------
    Button btnAdd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnAdd = (Button) findViewById(R.id.btn_add);

        //-------------

        final ListView listView = (ListView) findViewById(R.id.lv);
        ArrayAdapter<Member>adapter = new ArrayAdapter<Member>(this,android.R.layout.simple_expandable_list_item_1,members);
        listView.setAdapter(adapter);
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Object listItem = listView.getItemAtPosition(position);
                Intent intent = new Intent(MainActivity.this,ViewMember.class);
                startActivity(intent);
            }
        });
        //--------------
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