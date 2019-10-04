package com.example.contactversion2.database;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageButton;
import android.widget.TextView;

import com.example.contactversion2.R;
import com.example.contactversion2.model.Contact;

import java.util.ArrayList;

public class ContactAdapter extends BaseAdapter {

    private Context context;
    private ArrayList<Contact> contactModelArrayList;

    public ContactAdapter(Context context, ArrayList<Contact> contactModelArrayList) {

        this.context = context;
        this.contactModelArrayList = contactModelArrayList;
    }


    @Override
    public int getCount() {
        return contactModelArrayList.size();
    }

    @Override
    public Object getItem(int position) {
        return contactModelArrayList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;

        if (convertView == null) {
            holder = new ViewHolder();
            LayoutInflater inflater = (LayoutInflater) context
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.activity_item, null, true);

            holder.tvname = (TextView) convertView.findViewById(R.id.name);
            holder.tvnumber = (TextView) convertView.findViewById(R.id.number);

//            holder.imgavatar = (ImageButton) convertView.findViewById(R.id.avartar);
            convertView.setTag(holder);
        }else {
            // the getTag returns the viewHolder object set as a tag to the view
            holder = (ViewHolder)convertView.getTag();
        }

        holder.tvname.setText("Name: "+contactModelArrayList.get(position).getName());
        holder.tvnumber.setText("Number: "+contactModelArrayList.get(position).getNumber());

        return convertView;
    }

    private class ViewHolder {

        protected TextView tvname, tvnumber;
    }

}