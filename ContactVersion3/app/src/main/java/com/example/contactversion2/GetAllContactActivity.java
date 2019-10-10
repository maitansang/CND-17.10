package com.example.contactversion2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;

import com.example.contactversion2.database.ContactAdapter;
import com.example.contactversion2.database.Data;
import com.example.contactversion2.model.Contact;

import java.util.ArrayList;
import java.util.List;

public class GetAllContactActivity extends AppCompatActivity {

    private ListView listView;
    private ArrayList<Contact> listContact;
    private ContactAdapter contactAdapter;
    private Data data;
    private ArrayAdapter<String> adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_get_all_contact);


        listView = (ListView) findViewById(R.id.lv);

        data= new Data(this);

        listContact = data.getAllContacts();

        contactAdapter = new ContactAdapter(this,listContact);
        listView.setAdapter(contactAdapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(GetAllContactActivity.this,UpdateDeleteActivity.class);
                intent.putExtra("contact",listContact.get(position));
                startActivity(intent);
            }
        });
        EditText edtSearch = (EditText) findViewById(R.id.ed_search);
        adapter= new ArrayAdapter(this,R.layout.activity_item,R.id.name, listContact);
        listView.setTextFilterEnabled(true);
        listView.setAdapter(adapter);
        edtSearch.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
               GetAllContactActivity.this.adapter.getFilter().filter(s);
               adapter.notifyDataSetChanged();
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

    }

    public void click_add(View view) {
        Intent intent= new Intent(GetAllContactActivity.this, MainActivity.class);
        startActivity(intent);
    }
}
