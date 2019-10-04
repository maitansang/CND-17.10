package com.mts.intentbtap;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import androidx.annotation.Nullable;

public class DB_Controller extends SQLiteOpenHelper {
    public DB_Controller(@Nullable Context context, @Nullable String name, @Nullable SQLiteDatabase.CursorFactory factory, int version) {
        super(context, "Contact.db", factory, version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("Create table contact (id integer primary key autoincrement, name text unique, number text);");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("drop table if exists contact;");
        onCreate(db);
    }
    public void insert_contact(String name, String number){
        ContentValues contentValues = new ContentValues();
        contentValues.put("name", name);
        contentValues.put("number", number);
        this.getWritableDatabase().insertOrThrow("contact", "", contentValues);
    }
    public void delete_contact(String name){
        this.getWritableDatabase().delete("contact","name='"+name+"'",null);
    }
    public void update_contact(String pre_name, String new_name){
        this.getWritableDatabase().execSQL("update contact set name='"+new_name+"' where name='"+pre_name+"'");
    }
    public Member[] list_all_contact(){
        Cursor cursor = this.getReadableDatabase().rawQuery("select * from contact", null);
        Member members[] = new Member[]{};
        members[0]= new Member("Sang handsome","113");
        int i=1;

//        listView.setAdapter(adapter);
        while ( cursor.moveToNext()){
            //textView.append("name: "+cursor.getString(1)+"---  Phone number: "+ cursor.getString(2)+ "\n");
            members[i] = new Member(cursor.getString(1),cursor.getString(2));
            i++;
        }
        return  members;
    }
}
