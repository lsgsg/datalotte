# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Custom(models.Model):
    clnt_id = models.IntegerField(db_column='CLNT_ID', blank=True, null=True)  # Field name made lowercase.
    clnt_gender = models.CharField(db_column='CLNT_GENDER', max_length=10, blank=True, null=True)  # Field name made lowercase.
    clnt_age = models.IntegerField(db_column='CLNT_AGE', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'custom'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Master(models.Model):
    pd_c = models.IntegerField(db_column='PD_C', blank=True, null=True)  # Field name made lowercase.
    pd_nm = models.CharField(db_column='PD_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    clac1_nm = models.CharField(db_column='CLAC1_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    clac2_nm = models.CharField(db_column='CLAC2_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    clac3_nm = models.CharField(db_column='CLAC3_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'master'


class Product(models.Model):
    clnt_id = models.IntegerField(db_column='CLNT_ID', blank=True, null=True)  # Field name made lowercase.
    sess_id = models.IntegerField(db_column='SESS_ID', blank=True, null=True)  # Field name made lowercase.
    hits_seq = models.IntegerField(db_column='HITS_SEQ', blank=True, null=True)  # Field name made lowercase.
    pd_c = models.IntegerField(db_column='PD_C', blank=True, null=True)  # Field name made lowercase.
    pd_add_nm = models.CharField(db_column='PD_ADD_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    pd_bra_nm = models.CharField(db_column='PD_BRA_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    pd_buy_am = models.IntegerField(db_column='PD_BUY_AM', blank=True, null=True)  # Field name made lowercase.
    pd_buy_ct = models.IntegerField(db_column='PD_BUY_CT', blank=True, null=True)  # Field name made lowercase.
    result = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'product'


class Search1(models.Model):
    clnt_id = models.IntegerField(db_column='CLNT_ID', blank=True, null=True)  # Field name made lowercase.
    sess_id = models.IntegerField(db_column='SESS_ID', blank=True, null=True)  # Field name made lowercase.
    kwd_nm = models.CharField(db_column='KWD_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    search_cnt = models.IntegerField(db_column='SEARCH_CNT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'search1'


class Search2(models.Model):
    sess_dt = models.IntegerField(db_column='SESS_DT', blank=True, null=True)  # Field name made lowercase.
    kwd_nm = models.CharField(db_column='KWD_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    search_cnt = models.IntegerField(db_column='SEARCH_CNT', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'search2'


class Session(models.Model):
    clnt_id = models.CharField(db_column='CLNT_ID', max_length=50, blank=True, null=True)  # Field name made lowercase.
    sess_id = models.CharField(db_column='SESS_ID', max_length=50, blank=True, null=True)  # Field name made lowercase.
    sess_seq = models.IntegerField(db_column='SESS_SEQ', blank=True, null=True)  # Field name made lowercase.
    sess_dt = models.DateField(db_column='SESS_DT', blank=True, null=True)  # Field name made lowercase.
    tot_pag_view_ct = models.IntegerField(db_column='TOT_PAG_VIEW_CT', blank=True, null=True)  # Field name made lowercase.
    tot_sess_hr_v = models.IntegerField(db_column='TOT_SESS_HR_V', blank=True, null=True)  # Field name made lowercase.
    dvc_ctg_nm = models.CharField(db_column='DVC_CTG_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    zon_nm = models.CharField(db_column='ZON_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    city_nm = models.CharField(db_column='CITY_NM', max_length=50, blank=True, null=True)  # Field name made lowercase.
    day = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'session'
