package com.example.contactversion2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import com.example.contactversion2.database.Data;

public class MainActivity extends AppCompatActivity {
    private ImageButton imgstore;
    private Button  btnGetall;
    private EditText etname, etnumber;
    private Data data;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        data = new Data(this);

        imgstore = (ImageButton) findViewById(R.id.imgstore);

        etname = (EditText) findViewById(R.id.etname);
        etnumber = (EditText) findViewById(R.id.etnumber);



    }

    public void click_add(View view) {
        data.addContact(etname.getText().toString(), etnumber.getText().toString());
        etname.setText("");
        etnumber.setText("");
        Toast.makeText(MainActivity.this, "Stored Successfully!", Toast.LENGTH_SHORT).show();
    }

    public void click_back(View view) {
        Intent intent = new Intent(MainActivity.this,GetAllContactActivity.class);
        startActivity(intent);
    }
}
