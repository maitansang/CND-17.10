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
import com.example.contactversion2.model.Contact;

public class UpdateDeleteActivity extends AppCompatActivity {

    private Contact contact;
    private EditText etname, etnumber;
    private Button btnupdate, btndelete;
    private ImageButton imgEdit;
    private Data data;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_delete);

        Intent intent = getIntent();
        contact = (Contact) intent.getSerializableExtra("contact");

        data = new Data (this);

        etname = (EditText) findViewById(R.id.etname);
        etnumber = (EditText) findViewById(R.id.etnumber);
//        btndelete = (Button) findViewById(R.id.btndelete);
//        imgEdit = (ImageButton) findViewById(R.id.imgedit);

        etname.setText(contact.getName());
        etnumber.setText(contact.getNumber());



//        btndelete.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                data.deleteContact(contact.getId());
//                Toast.makeText(UpdateDeleteActivity.this, "Deleted Successfully!", Toast.LENGTH_SHORT).show();
//                Intent intent = new Intent(UpdateDeleteActivity.this,MainActivity.class);
//                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
//                startActivity(intent);
//            }
//        });

    }

    public void click_edit(View view) {
        data.updateContact(contact.getId(),etname.getText().toString(),etnumber.getText().toString());
        Toast.makeText(UpdateDeleteActivity.this, "Updated Successfully!", Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(UpdateDeleteActivity.this,GetAllContactActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(intent);
    }

    public void click_back(View view) {
        data.deleteContact(contact.getId());
                Toast.makeText(UpdateDeleteActivity.this, "Deleted Successfully!", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(UpdateDeleteActivity.this,GetAllContactActivity.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);

    }
}