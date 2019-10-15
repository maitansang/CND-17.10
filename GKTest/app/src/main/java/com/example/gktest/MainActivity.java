package com.example.gktest;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import com.example.gktest.controller.MemberAdapter;
import com.example.gktest.model.Member;

import java.io.Serializable;
import java.util.ArrayList;

import static android.provider.AlarmClock.EXTRA_MESSAGE;

public class MainActivity extends AppCompatActivity {

    private ListView lvMembers;
    private ArrayList<Member> members = new ArrayList<>();
    private MemberAdapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        EditText etname = (EditText) findViewById(R.id.edtName);

        showList();
        lvMembers.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(MainActivity.this,Details.class);
                intent.putExtra("member",  members.get(position));
                startActivity(intent);
            }
        });
        lvMembers.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {

            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view,
                                           int position, long arg3) {
                members.remove(position);
                lvMembers.setAdapter(adapter);

                Toast.makeText(MainActivity.this, "delete item: "+ position,Toast.LENGTH_SHORT).show();

                return false;
            }

        });
    }
    public void showList(){
        lvMembers = (ListView) findViewById(R.id.lvMembers);
        members.add(new Member("Mai Tấn Sang","20","54 Đội Cung"));
        members.add(new Member("Mai Tấn Sơn","20","52 Đội Cung"));
        members.add(new Member("Mai Tấn Tèo","20","56 Đội Cung"));
        members.add(new Member("Mai Tấn SangFake","20","54 Đội Cung"));
        adapter = new MemberAdapter(this, members);
        lvMembers.setAdapter(adapter);
        lvMembers.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Toast.makeText(MainActivity.this, "click to item: "+ position,Toast.LENGTH_SHORT).show();
            }
        });
    }

    public void btnAdd(View view) {
        EditText etname = (EditText) findViewById(R.id.edtName);
        EditText etage= (EditText) findViewById(R.id.edtAge);
        EditText etaddress= (EditText) findViewById(R.id.edtAddress);

        int age = Integer.parseInt(etage.getText().toString());
        String inName = etname.getText().toString();
        String inAge = etage.getText().toString();
        String inAddress= etaddress.getText().toString();
        if(age<=1||age>=90) {
            Toast.makeText(MainActivity.this, "Nhập tuổi quá sai!", Toast.LENGTH_SHORT).show();
        }
        else{
            members.add(new Member(inName,inAge, inAddress));
            etname.setText("");
            etage.setText("");
            etaddress.setText("");
            Toast.makeText(MainActivity.this, "Thêm member thành công!",Toast.LENGTH_SHORT).show();
        }

    }
}
